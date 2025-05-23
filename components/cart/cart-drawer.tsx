"use client"

import { useCartStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { formatPrice } from "@/lib/utils"
import { Minus, Plus, X } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, getTotalPrice } = useCartStore()
  const totalPrice = getTotalPrice()

  const handleCheckout = () => {
    // Mock checkout process
    alert("Thank you for your order! This is a demo checkout.")
    closeCart()
  }

  return (
    <Dialog open={isOpen} onOpenChange={closeCart}>
      <DialogContent className="sm:max-w-md h-full sm:h-auto max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-xl font-light">Shopping Cart</DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto">
          <AnimatePresence>
            {items.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <p className="text-silver-600 mb-4">Your cart is empty</p>
                <Button onClick={closeCart} variant="outline">
                  Continue Shopping
                </Button>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <motion.div
                    key={item.product.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex items-center space-x-4 p-4 border border-silver-200 rounded-xl"
                  >
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                      <Image
                        src={item.product.images[0] || "/placeholder.svg"}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-silver-900 truncate">{item.product.name}</h3>
                      <p className="text-sm text-silver-600">{item.product.material}</p>
                      <p className="text-sm font-medium text-silver-900">{formatPrice(item.product.price)}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="h-8 w-8"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="h-8 w-8"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.product.id)}
                      className="h-8 w-8 text-silver-500 hover:text-red-500"
                      aria-label="Remove item"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>

        {items.length > 0 && (
          <div className="border-t border-silver-200 pt-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-silver-900">Total</span>
              <span className="text-lg font-medium text-silver-900">{formatPrice(totalPrice)}</span>
            </div>
            <Button onClick={handleCheckout} className="w-full" size="lg">
              Checkout
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
