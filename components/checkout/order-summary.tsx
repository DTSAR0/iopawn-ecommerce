"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useCartStore } from "@/lib/store"
import { formatPrice } from "@/lib/utils"
import { Minus, Plus, AlertTriangle } from "lucide-react"
import { motion } from "framer-motion"

interface OrderSummaryProps {
  promoDiscount?: number
}

interface StockWarning {
  productId: string
  message: string
  requestedQuantity: number
  availableQuantity: number
}

export function OrderSummary({ promoDiscount = 0 }: OrderSummaryProps) {
  const { items, updateQuantity, getTotalPrice } = useCartStore()
  const [stockWarnings, setStockWarnings] = useState<StockWarning[]>([])
  const [isCheckingStock, setIsCheckingStock] = useState(false)
  
  const subtotal = getTotalPrice()
  const shipping = 15 // Placeholder shipping cost
  const tax = subtotal * 0.08 // 8% tax
  const discount = subtotal * (promoDiscount / 100)
  const total = subtotal + shipping + tax - discount

  // Check stock when items change
  useEffect(() => {
    if (items.length === 0) {
      setStockWarnings([])
      return
    }

    const checkStock = async () => {
      setIsCheckingStock(true)
      try {
        const response = await fetch('/api/cart/validate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            items: items.map(item => ({
              productId: item.product.id,
              quantity: item.quantity
            }))
          })
        })

        if (response.ok) {
          const data = await response.json()
          const warnings: StockWarning[] = []
          
          data.warnings.forEach((warning: any) => {
            const item = items.find(i => i.product.id === warning.productId)
            if (item) {
              warnings.push({
                productId: warning.productId,
                message: warning.message,
                requestedQuantity: item.quantity,
                availableQuantity: data.validatedItems.find((v: any) => v.productId === warning.productId)?.stockQuantity || 0
              })
            }
          })
          
          setStockWarnings(warnings)
        }
      } catch (error) {
        console.error('Error checking stock:', error)
      } finally {
        setIsCheckingStock(false)
      }
    }

    checkStock()
  }, [items])

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    updateQuantity(productId, newQuantity)
  }

  const getStockWarning = (productId: string) => {
    return stockWarnings.find(warning => warning.productId === productId)
  }

  return (
    <Card className="sticky top-8">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Cart Items */}
        <div className="space-y-4">
          {items.map((item, index) => {
            const stockWarning = getStockWarning(item.product.id)
            
            return (
              <motion.div
                key={item.product.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                {/* Stock Warning */}
                {stockWarning && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <Alert variant="destructive" className="text-xs">
                      <AlertTriangle className="h-3 w-3" />
                      <AlertDescription>
                        {stockWarning.message}
                      </AlertDescription>
                    </Alert>
                  </motion.div>
                )}

                {/* Product Item */}
                <div className="flex items-center space-x-4 p-3 border border-silver-200 rounded-lg">
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
                      onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                      className="h-6 w-6"
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                      className="h-6 w-6"
                      disabled={isCheckingStock}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            )
          })}
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
