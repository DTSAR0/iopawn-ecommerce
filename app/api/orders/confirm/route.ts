import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { sendOrderConfirmation } from "@/lib/mail";

export async function POST(req: NextRequest) {
  try {
    console.log("➡️ confirm route hit", req.method, req.url);
    console.log("🔄 Creating order in database and updating stock...");
    const body = await req.json();
    const { orderId, orderData } = body;
    
    console.log("📦 Order confirmation request:", { orderId });

    if (!orderId) {
      console.log("❌ Missing orderId");
      return NextResponse.json(
        { success: false, error: "Missing orderId" },
        { status: 400 }
      );
    }

    if (!orderData) {
      console.log("❌ Missing orderData - checking if order exists in database");
      
      // If no orderData provided, check if order already exists in database
      const existingOrderWithData = await db.order.findUnique({
        where: { id: orderId },
        select: {
          id: true,
          status: true,
          orderItems: true
        }
      });

      if (existingOrderWithData && existingOrderWithData.status === "PENDING") {
        console.log("✅ Found existing pending order, updating to PAID");
        const updatedOrder = await db.order.update({
          where: { id: orderId },
          data: { status: "PAID" }
        });
        
        // Update stock quantities for existing order
        const orderItems = existingOrderWithData.orderItems as any[];
        for (const item of orderItems) {
          const product = await db.product.findUnique({
            where: { id: item.productId },
            select: { stockQuantity: true }
          });

          if (!product) {
            console.log(`❌ Product ${item.productId} not found`);
            continue;
          }

          const newStockQuantity = product.stockQuantity - item.quantity;
          if (newStockQuantity <= 0) {
            await db.product.delete({ where: { id: item.productId } });
            console.log(`🗑️  Product ${item.productId} deleted (stock reached 0)`);
          } else {
            await db.product.update({
              where: { id: item.productId },
              data: { stockQuantity: newStockQuantity }
            });
            console.log(`📦 Updated stock for product ${item.productId}: ${newStockQuantity}`);
          }
        }

        return NextResponse.json({
          success: true,
          orderId: updatedOrder.id,
          status: updatedOrder.status
        });
      } else if (existingOrderWithData && existingOrderWithData.status === "PAID") {
        console.log("✅ Order already confirmed");
        return NextResponse.json({
          success: true,
          message: "Order already confirmed",
          orderId: existingOrderWithData.id
        });
      } else {
        console.log("❌ No orderData and no existing order found");
        return NextResponse.json(
          { success: false, error: "Order data not found" },
          { status: 404 }
        );
      }
    }

    // Check if order already exists
    const existingOrder = await db.order.findUnique({
      where: { id: orderId },
      select: { id: true, status: true }
    });

    if (existingOrder) {
      // Order already exists, check if it's already confirmed
      if (existingOrder.status === "PAID") {
        console.log("✅ Order already confirmed:", orderId);
        return NextResponse.json({
          success: true,
          message: "Order already confirmed",
          orderId: existingOrder.id
        });
      }

      // Order exists but not paid, update status
      if (existingOrder.status === "PENDING") {
        console.log("✅ Order exists and eligible for confirmation");
      } else {
        console.log("❌ Order status is not PENDING:", existingOrder.status);
        return NextResponse.json(
          { success: false, error: "Order cannot be confirmed" },
          { status: 400 }
        );
      }
    } else {
      console.log("✅ Creating new order in database");
    }

    // Get order items from orderData or existing order
    const orderItems = orderData.orderItems || [];
    
    // Create or update the order in the database
    let finalOrder;
    if (existingOrder) {
      // Update existing order status to PAID
      finalOrder = await db.order.update({
        where: { id: orderId },
        data: { status: "PAID" }
      });
      console.log("✅ Updated existing order status to PAID");
    } else {
      // Create new order in database
      finalOrder = await db.order.create({
        data: {
          id: orderId,
          email: orderData.email,
          phone: orderData.phone,
          firstName: orderData.firstName,
          lastName: orderData.lastName,
          country: orderData.country,
          streetAddress: orderData.streetAddress,
          city: orderData.city,
          state: orderData.state,
          zipCode: orderData.zipCode,
          paymentMethod: "stripe",
          cardName: null,
          cardNumber: null,
          cardExpiry: null,
          cardCvc: null,
          orderItems: orderData.orderItems,
          totalCents: orderData.totalCents,
          status: "PAID"
        }
      });
      console.log("✅ Created new order in database with PAID status");
    }

    // Update product stock quantities
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

    console.log("✅ Order confirmed and stock updated:", orderId);
    console.log("order.status before send:", finalOrder.status);

    // Send order confirmation email
    try {
      const orderItems = finalOrder.orderItems as any[];
      console.log("📧 Attempting to send email to:", finalOrder.email);
      console.log("📧 Order items:", orderItems);
      console.log("📧 Total cents:", finalOrder.totalCents);
      
      await sendOrderConfirmation(
        finalOrder.email,
        finalOrder.id,
        orderItems,
        finalOrder.totalCents
      );
      console.log("✅ email send triggered");
    } catch (emailError) {
      console.error("❌ Failed to send order confirmation email:", emailError);
      // Don't fail the order confirmation if email fails
    }

    return NextResponse.json({
      success: true,
      orderId: finalOrder.id,
      status: finalOrder.status
    });

  } catch (error) {
    console.error("❌ Error confirming order:", error);
    return NextResponse.json(
      { success: false, error: "Failed to confirm order", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
} 