import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    const {
      email,
      phone,
      firstName,
      lastName,
      country,
      streetAddress,
      city,
      state,
      zipCode,
      paymentMethod,
      cardName,
      cardNumber,
      cardExpiry,
      cardCvc,
      orderItems,
      totalCents
    } = body;

    // Validate required fields
    if (!email || !phone || !firstName || !lastName || !country || !streetAddress || !city || !zipCode) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!orderItems || !Array.isArray(orderItems) || orderItems.length === 0) {
      return NextResponse.json(
        { success: false, error: "No order items provided" },
        { status: 400 }
      );
    }

    // Create the order in the database
    const order = await db.order.create({
      data: {
        email,
        phone,
        firstName,
        lastName,
        country,
        streetAddress,
        city,
        state,
        zipCode,
        paymentMethod,
        cardName,
        cardNumber,
        cardExpiry,
        cardCvc,
        orderItems,
        totalCents,
        status: "PENDING"
      }
    });

    // Update product stock quantities
    for (const item of orderItems) {
      await db.product.update({
        where: { id: item.productId },
        data: {
          stockQuantity: {
            decrement: item.quantity
          }
        }
      });
    }

    return NextResponse.json({
      success: true,
      orderId: order.id,
      order
    });

  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create order", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
} 