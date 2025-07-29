"use client"

import { useState, useEffect } from "react"
import { useFormContext } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { countryData } from "@/lib/country-data"

export function SmartAddressForm() {
  const form = useFormContext()
  const [selectedCountry, setSelectedCountry] = useState<string>('')

  // Watch form values
  const country = form.watch("country")

  useEffect(() => {
    if (country && country !== selectedCountry) {
      setSelectedCountry(country)
      updateFormForCountry(country)
    }
  }, [country, selectedCountry])

  const updateFormForCountry = (countryCode: string) => {
    // Clear existing values when country changes
    form.setValue('fullName', '')
    form.setValue('phone', '')
    form.setValue('streetAddress', '')
    form.setValue('city', '')
    form.setValue('state', '')
    form.setValue('zipCode', '')
  }

  const getCurrentCountryData = () => {
    return selectedCountry ? countryData[selectedCountry] : null
  }

  const currentCountry = getCurrentCountryData()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Address Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Country Selection */}
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(countryData).map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Full Name */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone Number */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input 
                  {...field}
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9+\-\(\)\s]*"
                  onKeyPress={(e) => {
                    // Allow only numbers, +, -, (, ), and space
                    const allowedChars = /[0-9+\-\(\)\s]/
                    if (!allowedChars.test(e.key)) {
                      e.preventDefault()
                    }
                  }}
                  onChange={(e) => {
                    // Remove any non-allowed characters
                    const value = e.target.value.replace(/[^0-9+\-\(\)\s]/g, '')
                    field.onChange(value)
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Street Address */}
        <FormField
          control={form.control}
          name="streetAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street Address</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* City and State/Province */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {currentCountry?.addressFormat.hasState && (
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{currentCountry.addressFormat.stateLabel}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={`Select ${currentCountry.addressFormat.stateLabel.toLowerCase()}`} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {currentCountry.states?.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>

        {/* ZIP/Postal Code */}
        <FormField
          control={form.control}
          name="zipCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{currentCountry?.addressFormat.zipLabel || 'ZIP Code'}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  )
} 