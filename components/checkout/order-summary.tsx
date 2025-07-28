"use client"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/store"
import { formatPrice } from "@/lib/utils"
import { Minus, Plus } from "lucide-react"
import { motion } from "framer-motion"

interface OrderSummaryProps {
  promoDiscount?: number
}

export function OrderSummary({ promoDiscount = 0 }: OrderSummaryProps) {
  const { items, updateQuantity, getTotalPrice } = useCartStore()
  const subtotal = getTotalPrice()
  const shipping = 15 // Placeholder shipping cost
  const tax = subtotal * 0.08 // 8% tax
  const discount = subtotal * (promoDiscount / 100)
  const total = subtotal + shipping + tax - discount

  return (
    <Card className="sticky top-8">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Cart Items */}
        <div className="space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={item.product.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-4 p-3 border border-silver-200 rounded-lg"
            >
              <div className="relative w-12 h-12 rounded-md overflow-hidden">
                <Image
                  src={item.product.images[0] || "/placeholder.svg"}
                  alt={item.product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-silver-900 truncate">{item.product.name}</h4>
                <p className="text-xs text-silver-600">{item.product.material}</p>
                <p className="text-sm font-medium text-silver-900">{formatPrice(item.product.price)}</p>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  className="h-6 w-6"
                  disabled={item.quantity <= 1}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  className="h-6 w-6"
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Totals */}
        <div className="space-y-2 pt-4 border-t border-silver-200">
          <div className="flex justify-between text-sm">
            <span className="text-silver-600">Subtotal</span>
            <span className="text-silver-900">{formatPrice(subtotal)}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-silver-600">Shipping</span>
            <span className="text-silver-900">{formatPrice(shipping)}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-silver-600">Tax</span>
            <span className="text-silver-900">{formatPrice(tax)}</span>
          </div>

          {discount > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-green-600">Discount</span>
              <span className="text-green-600">-{formatPrice(discount)}</span>
            </div>
          )}

          <div className="flex justify-between text-lg font-medium pt-2 border-t border-silver-200">
            <span className="text-silver-900">Total</span>
            <span className="text-silver-900">{formatPrice(total)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
