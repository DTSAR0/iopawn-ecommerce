"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form } from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast"
import { useCartStore } from "@/lib/store"
import { ShippingAddressForm } from "./shipping-address-form"
import { ContactInformationForm } from "./contact-information-form"
import { BillingAddressForm } from "./billing-address-form"
import { PaymentMethodForm } from "./payment-method-form"
import { PromoCodeForm } from "./promo-code-form"

const checkoutSchema = z
  .object({
    // Shipping Address
    country: z.string().min(1, "Country is required"),
    fullName: z.string().min(1, "Full name is required"),
    streetAddress1: z.string().min(1, "Street address is required"),
    streetAddress2: z.string().optional(),
    city: z.string().min(1, "City is required"),
    stateProvince: z.string().min(1, "State/Province is required"),
    zipPostal: z.string().min(1, "ZIP/Postal code is required"),
    deliveryInstructions: z.string().optional(),

    // Contact Information
    email: z.string().email("Invalid email address"),
    subscribeUpdates: z.boolean().default(false),
    phone: z.string().min(1, "Phone number is required"),

    // Billing
    billingAddressSame: z.boolean().default(true),
    billingCountry: z.string().optional(),
    billingFullName: z.string().optional(),
    billingStreetAddress1: z.string().optional(),
    billingStreetAddress2: z.string().optional(),
    billingCity: z.string().optional(),
    billingStateProvince: z.string().optional(),
    billingZipPostal: z.string().optional(),

    // Payment
    paymentMethod: z.enum(["card", "paypal", "apple-pay", "google-pay"]),
    cardNumber: z.string().optional(),
    cardExpiry: z.string().optional(),
    cardCvc: z.string().optional(),

    // Promo Code
    promoCode: z.string().optional(),
  })
  .refine(
    (data) => {
      if (!data.billingAddressSame) {
        return (
          data.billingCountry &&
          data.billingFullName &&
          data.billingStreetAddress1 &&
          data.billingCity &&
          data.billingStateProvince &&
          data.billingZipPostal
        )
      }
      return true
    },
    {
      message: "Billing address is required when different from shipping",
      path: ["billingFullName"],
    },
  )
  .refine(
    (data) => {
      if (data.paymentMethod === "card") {
        return data.cardNumber && data.cardExpiry && data.cardCvc
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
      billingAddressSame: true,
      subscribeUpdates: false,
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
        {/* Shipping Address */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card>
            <CardHeader>
              <CardTitle>Shipping Address</CardTitle>
            </CardHeader>
            <CardContent>
              <ShippingAddressForm form={form} />
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactInformationForm form={form} />
            </CardContent>
          </Card>
        </motion.div>

        {/* Billing Address */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card>
            <CardHeader>
              <CardTitle>Billing Address</CardTitle>
            </CardHeader>
            <CardContent>
              <BillingAddressForm form={form} />
            </CardContent>
          </Card>
        </motion.div>

        {/* Payment Method */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <PaymentMethodForm form={form} />
            </CardContent>
          </Card>
        </motion.div>

        {/* Promo Code */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <Card>
            <CardHeader>
              <CardTitle>Promo Code</CardTitle>
            </CardHeader>
            <CardContent>
              <PromoCodeForm form={form} onDiscountApplied={setPromoDiscount} />
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
