import { NextApiRequest, NextApiResponse } from "next"
import Stripe from "stripe"
import { db } from "@/lib/prisma"

export const config = { api: { bodyParser: false } }

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { 
  apiVersion: "2025-07-30.basil" 
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const sig = req.headers["stripe-signature"] as string | undefined
  const buf = await (await import("raw-body")).default(req)

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(buf, sig!, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    console.error("Webhook signature verification failed:", err)
    return res.status(400).send(`Webhook Error: ${err instanceof Error ? err.message : 'Unknown error'}`)
  }

  try {
    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object as Stripe.Checkout.Session
        const sessionOrderId = session.metadata?.orderId
        
        if (sessionOrderId) {
          await db.order.update({ 
            where: { id: sessionOrderId }, 
            data: { status: "PAID" } 
          })
          console.log(`Order ${sessionOrderId} marked as PAID via checkout session`)
        }
        break
        
      case "payment_intent.succeeded":
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        const orderId = paymentIntent.metadata.orderId
        
        if (orderId) {
          await db.order.update({ 
            where: { id: orderId }, 
            data: { status: "PAID" } 
          })
          console.log(`Order ${orderId} marked as PAID via payment intent`)
        }
        break
        
      case "payment_intent.payment_failed":
        const failedPayment = event.data.object as Stripe.PaymentIntent
        const failedOrderId = failedPayment.metadata.orderId
        
        if (failedOrderId) {
          await db.order.update({ 
            where: { id: failedOrderId }, 
            data: { status: "CANCELLED" } 
          })
          console.log(`Order ${failedOrderId} marked as CANCELLED`)
        }
        break
        
      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    res.json({ received: true })
  } catch (error) {
    console.error("Error processing webhook:", error)
    res.status(500).json({ error: "Webhook processing failed" })
  }
}
    