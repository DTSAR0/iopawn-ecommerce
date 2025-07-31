"use client"

import type { UseFormReturn } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import type { CheckoutFormData } from "./checkout-form"
import { motion, AnimatePresence } from "framer-motion"
import { CreditCard, Smartphone } from "lucide-react"

interface PaymentMethodFormProps {
  form: UseFormReturn<CheckoutFormData>
}

export function PaymentMethodForm({ form }: PaymentMethodFormProps) {
  const paymentMethod = form.watch("paymentMethod")

  // Check if Apple Pay is available (only on HTTPS for security)
  const isApplePayAvailable =
    typeof window !== "undefined" && 
    window.location.protocol === 'https:' &&
    'ApplePaySession' in window && 
    (window as any).ApplePaySession?.canMakePayments

  // Check if Google Pay is available (simplified check)
  const isGooglePayAvailable = 
    typeof window !== "undefined" && 
    'google' in window && 
    (window as any).google?.payments

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="paymentMethod"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Select Payment Method</FormLabel>
            <FormControl>
              <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-3 border border-silver-200 rounded-lg p-4 hover:bg-silver-50 transition-colors">
                  <RadioGroupItem value="card" id="card" />
                  <label htmlFor="card" className="flex items-center space-x-2 cursor-pointer flex-1">
                    <CreditCard className="h-5 w-5 text-silver-600" />
                    <span>Credit / Debit Card</span>
                  </label>
                </div>

                <div className="flex items-center space-x-3 border border-silver-200 rounded-lg p-4 hover:bg-silver-50 transition-colors">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <label htmlFor="paypal" className="flex items-center space-x-2 cursor-pointer flex-1">
                    <div className="w-5 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                      P
                    </div>
                    <span>PayPal</span>
                  </label>
                </div>

                {isApplePayAvailable && (
                  <div className="flex items-center space-x-3 border border-silver-200 rounded-lg p-4 hover:bg-silver-50 transition-colors">
                    <RadioGroupItem value="apple-pay" id="apple-pay" />
                    <label htmlFor="apple-pay" className="flex items-center space-x-2 cursor-pointer flex-1">
                      <Smartphone className="h-5 w-5 text-silver-600" />
                      <span>Apple Pay</span>
                    </label>
                  </div>
                )}

                {isGooglePayAvailable && (
                  <div className="flex items-center space-x-3 border border-silver-200 rounded-lg p-4 hover:bg-silver-50 transition-colors">
                    <RadioGroupItem value="google-pay" id="google-pay" />
                    <label htmlFor="google-pay" className="flex items-center space-x-2 cursor-pointer flex-1">
                      <Smartphone className="h-5 w-5 text-silver-600" />
                      <span>Google Pay</span>
                    </label>
                  </div>
                )}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <AnimatePresence>
        {paymentMethod === "card" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Number</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onChange={(e) => {
                        // Format card number with spaces
                        const value = e.target.value
                          .replace(/\s/g, "")
                          .replace(/(.{4})/g, "$1 ")
                          .trim()
                        field.onChange(value)
                      }}
                      maxLength={19}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="cardExpiry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expiry Date</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        onChange={(e) => {
                          // Format expiry date
                          const value = e.target.value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1/$2")
                          field.onChange(value)
                        }}
                        maxLength={5}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cardCvc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CVC</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        onChange={(e) => {
                          // Only allow numbers
                          const value = e.target.value.replace(/\D/g, "")
                          field.onChange(value)
                        }}
                        maxLength={4}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </motion.div>
        )}

        {(paymentMethod === "apple-pay" || paymentMethod === "google-pay") && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center py-4"
          >
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="w-full bg-transparent"
              onClick={() => {
                // Handle digital wallet payment
                alert(`${paymentMethod === "apple-pay" ? "Apple" : "Google"} Pay integration would go here`)
              }}
            >
              <Smartphone className="h-5 w-5 mr-2" />
              Pay with {paymentMethod === "apple-pay" ? "Apple Pay" : "Google Pay"}
            </Button>
          </motion.div>
        )}

        {paymentMethod === "paypal" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center py-4"
          >
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="w-full bg-blue-600 text-white hover:bg-blue-700"
              onClick={() => {
                // Handle PayPal payment
                alert("PayPal integration would go here")
              }}
            >
              Continue with PayPal
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
