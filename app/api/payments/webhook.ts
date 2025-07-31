import { NextApiRequest, NextApiResponse } from "next"
import Stripe from "stripe"
import { db } from "@/lib/prisma"          // щоб оновити Order

export const config = { api: { bodyParser: false } }  // важливо!

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2025-07-30.basil" })

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const sig = req.headers["stripe-signature"] as string | undefined
  const buf = await (await import("raw-body")).default(req)

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(buf, sig!, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    return res.status(400).send(`Webhook Error`)
  }

  // реагуємо лише на успішну оплату
  if (event.type === "payment_intent.succeeded") {
    const pi = event.data.object as Stripe.PaymentIntent
    const orderId = pi.metadata.orderId
    await db.order.update({ where: { id: orderId }, data: { status: "PAID" } })
  }

  res.json({ received: true })
}
