"use client"

import { useState } from "react"
import type { UseFormReturn } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import type { CheckoutFormData } from "./checkout-form"
import { useToast } from "@/hooks/use-toast"

interface PromoCodeFormProps {
  form: UseFormReturn<CheckoutFormData>
  onDiscountApplied: (discount: number) => void
}

const validPromoCodes = {
  SAVE10: 10,
  WELCOME20: 20,
  FIRST15: 15,
}

export function PromoCodeForm({ form, onDiscountApplied }: PromoCodeFormProps) {
  const [isApplying, setIsApplying] = useState(false)
  const [appliedCode, setAppliedCode] = useState<string | null>(null)
  const { toast } = useToast()

  const handleApplyPromoCode = async () => {
    const promoCode = form.getValues("promoCode")
    if (!promoCode) return

    setIsApplying(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const discount = validPromoCodes[promoCode.toUpperCase() as keyof typeof validPromoCodes]

    if (discount) {
      setAppliedCode(promoCode.toUpperCase())
      onDiscountApplied(discount)
      toast({
        title: "Promo code applied!",
        description: `You saved ${discount}% on your order.`,
      })
    } else {
      toast({
        title: "Invalid promo code",
        description: "Please check your code and try again.",
        variant: "destructive",
      })
    }

    setIsApplying(false)
  }

  const handleRemovePromoCode = () => {
    setAppliedCode(null)
    onDiscountApplied(0)
    form.setValue("promoCode", "")
    toast({
      title: "Promo code removed",
      description: "The discount has been removed from your order.",
    })
  }

  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="promoCode"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Promo Code</FormLabel>
            <div className="flex space-x-2">
              <FormControl>
                <Input placeholder="Enter promo code" {...field} disabled={!!appliedCode} className="uppercase" />
              </FormControl>
              {appliedCode ? (
                <Button type="button" variant="outline" onClick={handleRemovePromoCode}>
                  Remove
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleApplyPromoCode}
                  disabled={isApplying || !field.value}
                >
                  {isApplying ? "Applying..." : "Apply"}
                </Button>
              )}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      {appliedCode && (
        <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-800">
            ✓ Promo code <strong>{appliedCode}</strong> applied successfully!
          </p>
        </div>
      )}

      <div className="text-xs text-silver-600">
        <p>Try these codes: SAVE10, WELCOME20, FIRST15</p>
      </div>
    </div>
  )
}
