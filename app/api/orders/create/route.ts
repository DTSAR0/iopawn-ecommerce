import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    console.log("🔄 Creating order...");
    const body = await req.json();
    console.log("📦 Order data received:", { 
      email: body.email, 
      country: body.country, 
      itemsCount: body.orderItems?.length,
      totalCents: body.totalCents 
    });
    
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
      orderItems,
      totalCents
    } = body;

    // Validate required fields
    if (!email || !phone || !firstName || !lastName || !country || !streetAddress || !city || !zipCode) {
      console.log("❌ Missing required fields:", { email: !!email, phone: !!phone, firstName: !!firstName, lastName: !!lastName, country: !!country, streetAddress: !!streetAddress, city: !!city, zipCode: !!zipCode });
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!orderItems || !Array.isArray(orderItems) || orderItems.length === 0) {
      console.log("❌ No order items provided");
      return NextResponse.json(
        { success: false, error: "No order items provided" },
        { status: 400 }
      );
    }

    console.log("✅ Validation passed, creating order...");

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
        paymentMethod: "stripe", // Default to Stripe since we removed payment method selection
        cardName: null,
        cardNumber: null,
        cardExpiry: null,
        cardCvc: null,
        orderItems,
        totalCents,
        status: "PENDING"
      }
    });

    console.log("✅ Order created:", order.id);

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
      console.log(`📦 Updated stock for product ${item.productId}: -${item.quantity}`);
    }

    console.log("✅ Stock quantities updated");

    return NextResponse.json({
      success: true,
      orderId: order.id,
      order
    });

  } catch (error) {
    console.error("❌ Error creating order:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create order", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
} 