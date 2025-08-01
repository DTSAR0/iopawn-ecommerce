import { NextApiRequest, NextApiResponse } from "next"
import { db } from "@/lib/prisma"

export const config = { api: { bodyParser: false } }

let stripe: any = null;

// Initialize Stripe only if environment variable is available
if (process.env.STRIPE_SECRET_KEY) {
  const Stripe = require("stripe");
  stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { 
    apiVersion: "2025-07-30.basil" 
  });
  console.log("✅ Stripe initialized for webhook");
} else {
  console.log("❌ STRIPE_SECRET_KEY not found for webhook");
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("🔄 Webhook received:", req.method, req.url);
  
  if (req.method !== "POST") {
    console.log("❌ Method not allowed:", req.method);
    return res.status(405).json({ error: "Method not allowed" })
  }

  // Check if Stripe is initialized
  if (!stripe) {
    console.log("❌ Stripe is not configured for webhook");
    return res.status(500).json({ error: "Stripe is not configured" })
  }

  const sig = req.headers["stripe-signature"] as string | undefined
  console.log("🔐 Webhook signature present:", !!sig);
  
  const buf = await (await import("raw-body")).default(req)
  console.log("📦 Webhook body size:", buf.length, "bytes");

  let event: any
  try {
    event = stripe.webhooks.constructEvent(buf, sig!, process.env.STRIPE_WEBHOOK_SECRET!)
    console.log("✅ Webhook signature verified, event type:", event.type);
  } catch (err) {
    console.error("❌ Webhook signature verification failed:", err)
    return res.status(400).send(`Webhook Error: ${err instanceof Error ? err.message : 'Unknown error'}`)
  }

  try {
    console.log("🔄 Processing webhook event:", event.type);
    
    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object
        const sessionOrderId = session.metadata?.orderId
        console.log("💳 Checkout session completed, orderId:", sessionOrderId);
        
        if (sessionOrderId) {
          console.log(`✅ Checkout session completed for order ${sessionOrderId}`);
          console.log("📋 Order will be confirmed when user lands on confirmation page");
        } else {
          console.log("❌ No orderId found in session metadata");
        }
        break
        
      case "payment_intent.succeeded":
        const paymentIntent = event.data.object
        const orderId = paymentIntent.metadata?.orderId
        console.log("💳 Payment intent succeeded, orderId:", orderId);
        
        if (orderId) {
          console.log(`✅ Payment intent succeeded for order ${orderId}`);
          console.log("📋 Order will be confirmed when user lands on confirmation page");
        } else {
          console.log("❌ No orderId found in payment intent metadata");
        }
        break
        
      case "payment_intent.payment_failed":
        const failedPayment = event.data.object
        const failedOrderId = failedPayment.metadata?.orderId
        console.log("❌ Payment intent failed, orderId:", failedOrderId);
        
        if (failedOrderId) {
          const updatedOrder = await db.order.update({ 
            where: { id: failedOrderId }, 
            data: { status: "CANCELLED" } 
          })
          console.log(`❌ Order ${failedOrderId} marked as CANCELLED`);
          console.log("📋 Updated order:", { id: updatedOrder.id, status: updatedOrder.status });
        } else {
          console.log("❌ No orderId found in failed payment metadata");
        }
        break
        
      default:
        console.log(`ℹ️ Unhandled event type: ${event.type}`);
    }

    console.log("✅ Webhook processed successfully");
    res.json({ received: true })
  } catch (error) {
    console.error("❌ Error processing webhook:", error)
    res.status(500).json({ error: "Webhook processing failed" })
  }
}
    