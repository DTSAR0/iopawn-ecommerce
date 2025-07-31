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
  const { clearCart, items, getTotalPrice } = useCartStore()

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: "card",
    },
    mode: "onChange", // Enable real-time validation
  })

  const paymentMethod = form.watch("paymentMethod")
  const cardNumber = form.watch("cardNumber")
  const cardExpiry = form.watch("cardExpiry")
  const cardCvc = form.watch("cardCvc")
  const cardName = form.watch("cardName")

  // Check if card fields are valid
  const isCardValid = paymentMethod === "card" ? 
    Boolean(cardNumber && cardExpiry && cardCvc && cardName) : true

  const onSubmit = async (data: CheckoutFormData) => {
    // Additional front-end validation for card payment
    if (data.paymentMethod === "card") {
      if (!data.cardNumber || !data.cardExpiry || !data.cardCvc || !data.cardName) {
        toast({
          title: "Card information incomplete",
          description: "Please fill in all card details to continue.",
          variant: "destructive",
        })
        return
      }

      // Basic card number validation (Luhn algorithm would be better in production)
      const cleanCardNumber = data.cardNumber.replace(/\s/g, "")
      if (cleanCardNumber.length < 13 || cleanCardNumber.length > 19) {
        toast({
          title: "Invalid card number",
          description: "Please enter a valid card number.",
          variant: "destructive",
        })
        return
      }

      // Basic expiry validation
      if (!/^\d{2}\/\d{2}$/.test(data.cardExpiry)) {
        toast({
          title: "Invalid expiry date",
          description: "Please enter expiry date in MM/YY format.",
          variant: "destructive",
        })
        return
      }

      // Basic CVC validation
      if (data.cardCvc.length < 3 || data.cardCvc.length > 4) {
        toast({
          title: "Invalid CVC",
          description: "Please enter a valid 3 or 4 digit CVC.",
          variant: "destructive",
        })
        return
      }
    }

    setIsSubmitting(true)

    try {
      // Prepare order items from cart
      const orderItems = items.map(item => ({
        productId: item.product.id,
        productSlug: item.product.slug || item.product.id,
        quantity: item.quantity,
        priceCents: Math.round(item.product.price * 100) // Convert to cents
      }))

      // Calculate total in cents
      const totalCents = Math.round(getTotalPrice() * 100)

      const orderPayload = {
        email: data.email,
        phone: data.phone,
        firstName: data.firstName,
        lastName: data.lastName,
        country: data.country,
        streetAddress: data.streetAddress,
        city: data.city,
        state: data.state,
        zipCode: data.zipCode,
        paymentMethod: data.paymentMethod,
        cardName: data.cardName,
        cardNumber: data.cardNumber,
        cardExpiry: data.cardExpiry,
        cardCvc: data.cardCvc,
        orderItems,
        totalCents
      };

      // Create order in database first
      const orderResponse = await fetch('/api/orders/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderPayload)
      })

      if (!orderResponse.ok) {
        const errorData = await orderResponse.json();
        throw new Error(`Failed to create order: ${errorData.error || 'Unknown error'}`)
      }

      const responseData = await orderResponse.json()
      const orderId = responseData.orderId

      // Create Stripe checkout session
      const sessionResponse = await fetch('/api/payments/create-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: items,
          orderId: orderId,
          customerEmail: data.email
        })
      })

      if (!sessionResponse.ok) {
        const errorData = await sessionResponse.json();
        throw new Error(`Failed to create checkout session: ${errorData.error || 'Unknown error'}`)
      }

      const sessionData = await sessionResponse.json()

      // Clear cart
      clearCart()

      toast({
        title: "Redirecting to payment...",
        description: "Please complete your payment to finalize your order.",
      })

      // Redirect to Stripe Checkout
      window.location.href = sessionData.url
    } catch (error) {
      console.error('Order creation error:', error)
      toast({
        title: "Error placing order",
        description: error instanceof Error ? error.message : "Please try again or contact support.",
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
          <Button 
            type="submit" 
            size="lg" 
            className="w-full" 
            disabled={isSubmitting || !form.formState.isValid || !isCardValid}
          >
            {isSubmitting ? "Placing Order..." : "Place Order"}
          </Button>
          
          {/* Card validation feedback */}
          {paymentMethod === "card" && !isCardValid && (
            <p className="text-sm text-red-600 mt-2 text-center">
              Please complete all card information to continue
            </p>
          )}
        </motion.div>
      </form>
    </Form>
  )
}
