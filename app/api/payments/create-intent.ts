import Stripe from "stripe"
import type { NextApiRequest, NextApiResponse } from "next"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2025-07-30.basil" })

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end()

  const { orderId, lineItems } = req.body   // lineItems = [{ name, price, qty }]
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card", "paypal"],   // увімкнені в Dashboard
    line_items: lineItems.map((i: { name: string; price: number; qty: number }) => ({
      price_data: {
        currency: "usd",
        product_data: { name: i.name },
        unit_amount: i.price,
      },
      quantity: i.qty,
    })),
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/order-confirmation/${orderId}`,
    cancel_url:  `${process.env.NEXT_PUBLIC_SITE_URL}/checkout`,
    metadata: { orderId },
  })

  res.json({ url: session.url })   // редіректити саме сюди
}
