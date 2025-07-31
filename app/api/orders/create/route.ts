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
      { success: false, error: "Failed to create order" },
      { status: 500 }
    );
  }
} 