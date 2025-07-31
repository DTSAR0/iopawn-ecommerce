import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const envCheck = {
    hasStripeSecretKey: !!process.env.STRIPE_SECRET_KEY,
    hasStripePublishableKey: !!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    hasWebhookSecret: !!process.env.STRIPE_WEBHOOK_SECRET,
    hasSiteUrl: !!process.env.NEXT_PUBLIC_SITE_URL,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'Not set',
    stripeKeyPrefix: process.env.STRIPE_SECRET_KEY ? process.env.STRIPE_SECRET_KEY.substring(0, 7) + '...' : 'Not set'
  };

  return NextResponse.json({
    message: "Stripe Environment Check",
    timestamp: new Date().toISOString(),
    environment: envCheck,
    status: envCheck.hasStripeSecretKey && envCheck.hasSiteUrl ? 'Ready' : 'Missing Configuration'
  });
} 