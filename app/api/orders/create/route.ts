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

    console.log("✅ Validation passed, generating order ID...");

    // Generate a shorter order ID (but don't create order yet)
    const orderId = generateShortOrderId();
    console.log("🆔 Generated order ID:", orderId);
    console.log("📦 Order will be created in database only after payment confirmation");

    // Return the order ID for Stripe session creation
    // The actual order will be created in the confirm endpoint after payment

    return NextResponse.json({
      success: true,
      orderId: orderId,
      orderData: {
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
      }
    });

  } catch (error) {
    console.error("❌ Error creating order:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create order", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
} 