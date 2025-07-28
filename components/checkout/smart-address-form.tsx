"use client"

import { useState, useEffect } from "react"
import { useFormContext } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Wand2, RefreshCw } from "lucide-react"
import { 
  countryData, 
  getRandomName, 
  getRandomCity, 
  getRandomState, 
  formatPhoneNumber, 
  generateZipCode 
} from "@/lib/country-data"

export function SmartAddressForm() {
  const form = useFormContext()
  const [selectedCountry, setSelectedCountry] = useState<string>('')
  const [isGenerating, setIsGenerating] = useState(false)

  // Watch form values
  const country = form.watch("country")
  const fullName = form.watch("fullName")
  const phone = form.watch("phone")

  useEffect(() => {
    if (country && country !== selectedCountry) {
      setSelectedCountry(country)
      updateFormForCountry(country)
    }
  }, [country, selectedCountry])

  const updateFormForCountry = (countryCode: string) => {
    const country = countryData[countryCode]
    if (!country) return

    // Update form labels and validation based on country
    form.setValue("country", countryCode)
    
    // Update field labels in the form context
    const addressFormat = country.addressFormat
    
    // Generate appropriate data for the country
    const firstName = getRandomName(countryCode, 'first')
    const lastName = getRandomName(countryCode, 'last')
    const city = getRandomCity(countryCode)
    const state = getRandomState(countryCode)
    const phoneNumber = formatPhoneNumber(country.phoneCode, country.phoneFormat)
    const zipCode = generateZipCode(addressFormat.zipFormat)

    // Update form values
    form.setValue("fullName", `${firstName} ${lastName}`)
    form.setValue("phone", phoneNumber)
    form.setValue("city", city)
    if (addressFormat.hasState && state) {
      form.setValue("state", state)
    }
    form.setValue("zipCode", zipCode)
  }

  const generateRandomData = async () => {
    if (!selectedCountry) return
    
    setIsGenerating(true)
    
    // Simulate a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500))
    
    updateFormForCountry(selectedCountry)
    setIsGenerating(false)
  }

  const getCurrentCountryData = () => {
    return selectedCountry ? countryData[selectedCountry] : null
  }

  const currentCountry = getCurrentCountryData()

  // Static placeholder function that doesn't change on re-renders
  const getPlaceholderForCountry = (countryCode: string, fieldType: 'fullName' | 'phone' | 'city' | 'zipCode'): string => {
    const country = countryData[countryCode]
    if (!country) {
      switch (fieldType) {
        case 'fullName': return "John Doe"
        case 'phone': return "+1 (555) 123-4567"
        case 'city': return "New York"
        case 'zipCode': return "10001"
        default: return ""
      }
    }

    switch (fieldType) {
      case 'fullName':
        return `${country.names.firstNames[0]} ${country.names.lastNames[0]}`
      case 'phone':
        return formatPhoneNumber(country.phoneCode, country.phoneFormat)
      case 'city':
        return country.cities[0]
      case 'zipCode':
        return generateZipCode(country.addressFormat.zipFormat)
      default:
        return ""
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Smart Address Form</span>
          {selectedCountry && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={generateRandomData}
              disabled={isGenerating}
              className="flex items-center gap-2"
            >
              {isGenerating ? (
                <RefreshCw className="h-4 w-4 animate-spin" />
              ) : (
                <Wand2 className="h-4 w-4" />
              )}
              Generate Data
            </Button>
          )}
        </CardTitle>
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
                <Input 
                  placeholder={getPlaceholderForCountry(selectedCountry, 'fullName')} 
                  {...field} 
                />
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
                  placeholder={getPlaceholderForCountry(selectedCountry, 'phone')} 
                  {...field} 
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
                <Input placeholder="123 Main St" {...field} />
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
                  <Input 
                    placeholder={getPlaceholderForCountry(selectedCountry, 'city')} 
                    {...field} 
                  />
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
                <Input 
                  placeholder={getPlaceholderForCountry(selectedCountry, 'zipCode')} 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Country-specific info */}
        {currentCountry && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 bg-blue-50 rounded-lg border border-blue-200"
          >
            <p className="text-sm text-blue-800">
              <strong>Format for {currentCountry.name}:</strong> Phone numbers use {currentCountry.phoneFormat} format, 
              and postal codes follow {currentCountry.addressFormat.zipFormat} pattern.
            </p>
          </motion.div>
        )}
      </CardContent>
    </Card>
  )
} 