import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { generateShortOrderId } from "@/lib/utils";

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

    // Generate a shorter order ID
    const orderId = generateShortOrderId();
    console.log("🆔 Generated order ID:", orderId);

    // Create the order in the database
    const order = await db.order.create({
      data: {
        id: orderId,
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
    console.log("📦 Stock quantities will be updated after payment confirmation");

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