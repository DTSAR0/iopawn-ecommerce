"use client"

import type { UseFormReturn } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import type { CheckoutFormData } from "./checkout-form"
import type { CountryData } from "@/lib/country-data"

interface ContactInformationFormProps {
  form: UseFormReturn<CheckoutFormData>
  countryData?: CountryData | null
}

export function ContactInformationForm({ form, countryData }: ContactInformationFormProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email Address</FormLabel>
            <FormControl>
              <Input type="email" placeholder="john@example.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="subscribeUpdates"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>Subscribe to order updates</FormLabel>
              <p className="text-sm text-silver-600">Get notified about your order status and delivery updates</p>
            </div>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone Number</FormLabel>
            <FormControl>
              <div className="flex">
                <div className="flex items-center px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 text-gray-700 rounded-l-md border-r-gray-300">
                  {countryData?.phoneCode || '+1'}
                </div>
                <Input 
                  type="tel" 
                  {...field}
                  className="rounded-l-none border-l-0"
                  placeholder="Enter phone number"
                  onKeyPress={(e) => {
                    // Allow only numbers, -, (, ), and space
                    const allowedChars = /[0-9\-\(\)\s]/
                    if (!allowedChars.test(e.key)) {
                      e.preventDefault()
                    }
                  }}
                  onChange={(e) => {
                    // Remove any non-allowed characters
                    const value = e.target.value.replace(/[^0-9\-\(\)\s]/g, '')
                    field.onChange(value)
                  }}
                />
              </div>
            </FormControl>
            <p className="text-sm text-silver-600">For courier SMS notifications</p>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
