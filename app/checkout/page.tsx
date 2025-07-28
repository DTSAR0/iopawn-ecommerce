"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useCartStore } from "@/lib/store"
import { CheckoutForm } from "@/components/checkout/checkout-form"
import { OrderSummary } from "@/components/checkout/order-summary"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CheckoutPage() {
  const { items, getTotalPrice } = useCartStore()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && items.length === 0) {
      router.push("/")
    }
  }, [items.length, mounted, router])

  if (!mounted) {
    return null
  }

  if (items.length === 0) {
    return null
  }

  return (
    <div className="min-h-screen bg-silver-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Return to Cart
            </Button>
          </Link>
          <h1 className="text-3xl font-light text-silver-900">Checkout</h1>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form - Left side on desktop, below summary on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 order-2 lg:order-1"
          >
            <CheckoutForm />
          </motion.div>

          {/* Order Summary - Right side on desktop, top on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <OrderSummary />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
