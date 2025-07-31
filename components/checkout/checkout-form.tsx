"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { useCartStore } from "@/lib/store"
import { SmartAddressForm } from "./smart-address-form"
import { PaymentMethodForm } from "./payment-method-form"

const checkoutSchema = z
  .object({
    // Address Information
    country: z.string().min(1, "Country is required"),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    streetAddress: z.string().min(1, "Street address is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().optional(),
    zipCode: z.string().min(1, "ZIP/Postal code is required"),
    
    // Contact Information
    email: z.string().email("Invalid email address"),
    phone: z.string()
      .min(1, "Phone number is required")
      .regex(/^[0-9+\-\(\)\s]+$/, "Phone number can only contain numbers, +, -, (, ), and spaces")
      .min(7, "Phone number must be at least 7 digits")
      .max(20, "Phone number cannot exceed 20 characters"),

    // Payment
    paymentMethod: z.enum(["card", "paypal", "apple-pay", "google-pay"]),
    cardNumber: z.string().optional(),
    cardExpiry: z.string().optional(),
    cardCvc: z.string().optional(),
    cardName: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.paymentMethod === "card") {
        return data.cardNumber && data.cardExpiry && data.cardCvc && data.cardName
      }
      return true
    },
    {
      message: "Card details are required for card payment",
      path: ["cardNumber"],
    },
  )

export type CheckoutFormData = z.infer<typeof checkoutSchema>

export function CheckoutForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [promoDiscount, setPromoDiscount] = useState(0)
  const router = useRouter()
  const { toast } = useToast()
  const { clearCart } = useCartStore()

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: "card",
    },
  })

  const onSubmit = async (data: CheckoutFormData) => {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Generate order ID
      const orderId = Math.random().toString(36).substr(2, 9)

      // Clear cart
      clearCart()

      toast({
        title: "Order placed successfully!",
        description: "You will receive a confirmation email shortly.",
      })

      // Redirect to confirmation page
      router.push(`/order-confirmation/${orderId}`)
    } catch (error) {
      toast({
        title: "Error placing order",
        description: "Please try again or contact support.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Smart Address Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <SmartAddressForm />
        </motion.div>

        {/* Email Field */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Payment Method */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <PaymentMethodForm form={form} />
            </CardContent>
          </Card>
        </motion.div>

        {/* Submit Button - Sticky on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="sticky bottom-0 bg-silver-50 py-4 -mx-4 px-4 lg:static lg:bg-transparent lg:py-0 lg:mx-0 lg:px-0"
        >
          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting || !form.formState.isValid}>
            {isSubmitting ? "Placing Order..." : "Place Order"}
          </Button>
        </motion.div>
      </form>
    </Form>
  )
}
