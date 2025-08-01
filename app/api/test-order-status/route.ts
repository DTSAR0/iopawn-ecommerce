import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    // Get all orders with their status
    const orders = await db.order.findMany({
      select: {
        id: true,
        status: true,
        email: true,
        totalCents: true,
        createdAt: true,
        orderItems: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json({
      message: "Order Status Check",
      timestamp: new Date().toISOString(),
      orders: orders,
      totalOrders: orders.length
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { orderId, newStatus } = body;

    if (!orderId || !newStatus) {
      return NextResponse.json(
        { error: "Missing orderId or newStatus" },
        { status: 400 }
      );
    }

    // Update the order status
    const updatedOrder = await db.order.update({
      where: { id: orderId },
      data: { status: newStatus },
      select: {
        id: true,
        status: true,
        email: true,
        totalCents: true,
        updatedAt: true
      }
    });

    return NextResponse.json({
      message: "Order status updated",
      order: updatedOrder
    });
  } catch (error) {
    console.error("Error updating order:", error);
    return NextResponse.json(
      { error: "Failed to update order" },
      { status: 500 }
    );
  }
} 