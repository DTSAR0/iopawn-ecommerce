"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Home } from "lucide-react"
import Link from "next/link"

export default function OrderConfirmationPage() {
  const params = useParams()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [mounted, setMounted] = useState(false)
  const [orderConfirmed, setOrderConfirmed] = useState(false)
  const [isConfirming, setIsConfirming] = useState(false)
  const orderId = params.orderId as string
  const success = searchParams.get('success')

  useEffect(() => {
    setMounted(true)
  }, [orderId])

  useEffect(() => {
    const confirmOrder = async () => {
      if (!mounted || !orderId || !success || orderConfirmed || isConfirming) {
        return
      }

      setIsConfirming(true)
      console.log("🔄 Confirming order:", orderId)

      try {
        const response = await fetch('/api/orders/confirm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ orderId }),
        })

        const result = await response.json()

        if (result.success) {
          console.log("✅ Order confirmed successfully:", result)
          setOrderConfirmed(true)
        } else {
          console.error("❌ Failed to confirm order:", result.error)
        }
      } catch (error) {
        console.error("❌ Error confirming order:", error)
      } finally {
        setIsConfirming(false)
      }
    }

    confirmOrder()
  }, [mounted, orderId, success, orderConfirmed, isConfirming])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-silver-50 py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-8">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </motion.div>

          {/* Success Message */}
          <div className="space-y-4">
            <h1 className="text-4xl font-light text-silver-900">
              {isConfirming ? "Confirming Order..." : "Order Confirmed!"}
            </h1>
            <p className="text-xl text-silver-600">
              {isConfirming 
                ? "Please wait while we finalize your order..."
                : "Thank you for your purchase. Your order has been successfully placed."
              }
            </p>
          </div>

          {/* Order Details Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card>
              <CardHeader>
                <CardTitle>Order Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-silver-600">Order Number</span>
                  <span className="font-medium text-silver-900">#{orderId.toUpperCase()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-silver-600">Estimated Delivery</span>
                  <span className="font-medium text-silver-900">3-5 business days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-silver-600">Tracking</span>
                  <span className="font-medium text-silver-900">Available within 24 hours</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-light text-silver-900">What's Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="p-4 border border-silver-200 rounded-lg">
                <h3 className="font-medium text-silver-900 mb-2">📧 Confirmation Email</h3>
                <p className="text-sm text-silver-600">
                  You'll receive an order confirmation email with all the details shortly.
                </p>
              </div>
              <div className="p-4 border border-silver-200 rounded-lg">
                <h3 className="font-medium text-silver-900 mb-2">📦 Shipping Updates</h3>
                <p className="text-sm text-silver-600">We'll send you tracking information once your order ships.</p>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/">
              <Button size="lg" className="w-full sm:w-auto">
                <Home className="w-4 h-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
              Track Order
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
