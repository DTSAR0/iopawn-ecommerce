import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    console.log("🔄 Confirming order and updating stock...");
    const body = await req.json();
    const { orderId } = body;
    
    console.log("📦 Order confirmation request:", { orderId });

    if (!orderId) {
      console.log("❌ Missing orderId");
      return NextResponse.json(
        { success: false, error: "Missing orderId" },
        { status: 400 }
      );
    }

    // Get the order with its items
    const order = await db.order.findUnique({
      where: { id: orderId },
      select: {
        id: true,
        status: true,
        orderItems: true
      }
    });

    if (!order) {
      console.log("❌ Order not found:", orderId);
      return NextResponse.json(
        { success: false, error: "Order not found" },
        { status: 404 }
      );
    }

    // Check if order is already confirmed
    if (order.status === "PAID") {
      console.log("✅ Order already confirmed:", orderId);
      return NextResponse.json({
        success: true,
        message: "Order already confirmed",
        orderId: order.id
      });
    }

    // Check if order is cancelled
    if (order.status === "CANCELLED") {
      console.log("❌ Order is cancelled:", orderId);
      return NextResponse.json(
        { success: false, error: "Order is cancelled" },
        { status: 400 }
      );
    }

    // Check if order is pending (should be for new confirmations)
    if (order.status !== "PENDING") {
      console.log("❌ Order status is not PENDING:", order.status);
      return NextResponse.json(
        { success: false, error: "Order cannot be confirmed" },
        { status: 400 }
      );
    }

    console.log("✅ Order found and eligible for confirmation");

    // Update product stock quantities
    const orderItems = order.orderItems as any[];
    for (const item of orderItems) {
      // First, get the current stock quantity
      const product = await db.product.findUnique({
        where: { id: item.productId },
        select: { stockQuantity: true }
      });

      if (!product) {
        console.log(`❌ Product ${item.productId} not found`);
        continue;
      }

      const newStockQuantity = product.stockQuantity - item.quantity;
      console.log(`📦 Product ${item.productId}: ${product.stockQuantity} - ${item.quantity} = ${newStockQuantity}`);

      if (newStockQuantity <= 0) {
        // Delete the product if stock reaches 0 or goes below
        await db.product.delete({
          where: { id: item.productId }
        });
        console.log(`🗑️  Product ${item.productId} deleted (stock reached 0)`);
      } else {
        // Update stock quantity normally
        await db.product.update({
          where: { id: item.productId },
          data: {
            stockQuantity: newStockQuantity
          }
        });
        console.log(`📦 Updated stock for product ${item.productId}: ${newStockQuantity}`);
      }
    }

    // Update order status to PAID
    const updatedOrder = await db.order.update({
      where: { id: orderId },
      data: { status: "PAID" }
    });

    console.log("✅ Order confirmed and stock updated:", orderId);

    return NextResponse.json({
      success: true,
      orderId: updatedOrder.id,
      status: updatedOrder.status
    });

  } catch (error) {
    console.error("❌ Error confirming order:", error);
    return NextResponse.json(
      { success: false, error: "Failed to confirm order", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
} 