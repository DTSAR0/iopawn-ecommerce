import { NextRequest, NextResponse } from "next/server";

let stripe: any = null;

// Initialize Stripe only if environment variable is available
if (process.env.STRIPE_SECRET_KEY) {
  const Stripe = require("stripe");
  stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-07-30.basil",
  });
  console.log("✅ Stripe initialized successfully");
} else {
  console.log("❌ STRIPE_SECRET_KEY not found in environment variables");
}

export async function POST(req: NextRequest) {
  try {
    console.log("🔄 Creating checkout session...");
    
    // Check if Stripe is initialized
    if (!stripe) {
      console.log("❌ Stripe is not configured");
      return NextResponse.json(
        { error: "Stripe is not configured. Please check environment variables." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { items, orderId, customerEmail } = body;
    
    console.log("📦 Order data:", { orderId, customerEmail, itemsCount: items.length });

    // Validate required fields
    if (!items || !Array.isArray(items) || items.length === 0) {
      console.log("❌ Invalid items data:", items);
      return NextResponse.json(
        { error: "Invalid items data" },
        { status: 400 }
      );
    }

    if (!orderId) {
      console.log("❌ Missing orderId");
      return NextResponse.json(
        { error: "Missing orderId" },
        { status: 400 }
      );
    }

    // Check if NEXT_PUBLIC_SITE_URL is set
    if (!process.env.NEXT_PUBLIC_SITE_URL) {
      console.log("❌ NEXT_PUBLIC_SITE_URL not set");
      return NextResponse.json(
        { error: "Site URL not configured" },
        { status: 500 }
      );
    }

    console.log("🔗 Site URL:", process.env.NEXT_PUBLIC_SITE_URL);

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item: any) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.product.name,
            images: item.product.images,
          },
          unit_amount: Math.round(item.product.price * 100), // Convert to cents
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/order-confirmation/${orderId}?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout?canceled=true`,
      customer_email: customerEmail,
      metadata: {
        orderId: orderId,
      },
    });

    console.log("✅ Checkout session created:", session.id);
    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error("❌ Error creating checkout session:", error);
    
    // Provide more specific error messages
    let errorMessage = "Failed to create checkout session";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
} 