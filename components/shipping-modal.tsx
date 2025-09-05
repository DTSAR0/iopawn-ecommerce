"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Truck, Clock, AlertCircle } from "lucide-react"

interface ShippingModalProps {
  isOpen: boolean
  onClose: () => void
}

interface ShippingRegion {
  id: string
  name: string
  countries: string[]
  minDays: number
  maxDays: number
  hasCustoms: boolean
}

const shippingRegions: ShippingRegion[] = [
  {
    id: "poland",
    name: "Poland (domestic)",
    countries: ["Poland"],
    minDays: 2,
    maxDays: 4,
    hasCustoms: false
  },
  {
    id: "neighboring-eu",
    name: "Neighboring EU",
    countries: ["Germany", "Czechia", "Slovakia", "Lithuania"],
    minDays: 4,
    maxDays: 8,
    hasCustoms: false
  },
  {
    id: "western-northern-eu",
    name: "Western/Northern Europe",
    countries: ["France", "Netherlands", "Belgium", "Denmark", "Sweden"],
    minDays: 5,
    maxDays: 9,
    hasCustoms: false
  },
  {
    id: "southern-eu",
    name: "Southern Europe",
    countries: ["Italy", "Spain", "Portugal", "Greece"],
    minDays: 6,
    maxDays: 12,
    hasCustoms: false
  },
  {
    id: "uk-norway-switzerland",
    name: "UK, Norway, Switzerland",
    countries: ["United Kingdom", "Norway", "Switzerland"],
    minDays: 6,
    maxDays: 12,
    hasCustoms: true
  },
  {
    id: "balkans-ukraine-moldova",
    name: "Balkans, Ukraine, Moldova",
    countries: ["Albania", "Bosnia", "Croatia", "Serbia", "Ukraine", "Moldova"],
    minDays: 7,
    maxDays: 14,
    hasCustoms: false
  },
  {
    id: "turkey-israel",
    name: "Turkey, Israel",
    countries: ["Turkey", "Israel"],
    minDays: 7,
    maxDays: 14,
    hasCustoms: false
  },
  {
    id: "usa-canada",
    name: "USA, Canada",
    countries: ["United States", "Canada"],
    minDays: 10,
    maxDays: 20,
    hasCustoms: true
  },
  {
    id: "latin-america",
    name: "Mexico, Brazil, Argentina, Chile",
    countries: ["Mexico", "Brazil", "Argentina", "Chile"],
    minDays: 14,
    maxDays: 28,
    hasCustoms: true
  },
  {
    id: "gulf-states",
    name: "UAE, Saudi Arabia, Qatar",
    countries: ["United Arab Emirates", "Saudi Arabia", "Qatar"],
    minDays: 8,
    maxDays: 16,
    hasCustoms: true
  },
  {
    id: "north-africa",
    name: "North Africa",
    countries: ["Egypt", "Morocco", "Tunisia"],
    minDays: 12,
    maxDays: 25,
    hasCustoms: true
  },
  {
    id: "sub-saharan-africa",
    name: "Sub-Saharan Africa",
    countries: ["Nigeria", "Kenya", "South Africa"],
    minDays: 14,
    maxDays: 30,
    hasCustoms: true
  },
  {
    id: "caucasus-central-asia",
    name: "Caucasus & Central Asia",
    countries: ["Georgia", "Armenia", "Kazakhstan", "Uzbekistan"],
    minDays: 10,
    maxDays: 20,
    hasCustoms: true
  },
  {
    id: "south-asia",
    name: "South Asia",
    countries: ["India", "Pakistan"],
    minDays: 12,
    maxDays: 25,
    hasCustoms: true
  },
  {
    id: "east-asia",
    name: "East Asia",
    countries: ["China", "Japan", "South Korea"],
    minDays: 10,
    maxDays: 20,
    hasCustoms: true
  },
  {
    id: "southeast-asia",
    name: "Southeast Asia",
    countries: ["Singapore", "Malaysia", "Thailand", "Vietnam", "Indonesia", "Philippines"],
    minDays: 12,
    maxDays: 22,
    hasCustoms: true
  },
  {
    id: "australia-new-zealand",
    name: "Australia, New Zealand",
    countries: ["Australia", "New Zealand"],
    minDays: 12,
    maxDays: 22,
    hasCustoms: true
  }
]

export function ShippingModal({ isOpen, onClose }: ShippingModalProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>("")

  const handleRegionChange = (value: string) => {
    setSelectedRegion(value)
  }

  const selectedRegionData = shippingRegions.find(region => region.id === selectedRegion)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold text-silver-900 flex items-center justify-center gap-2">
            <Truck className="h-5 w-5" />
            Shipping Information
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Region Selection */}
          <div className="space-y-3">
            <label htmlFor="region-select" className="block text-sm font-medium text-silver-700">
              Choose your region
            </label>
            
            <Select value={selectedRegion} onValueChange={handleRegionChange}>
              <SelectTrigger id="region-select" className="w-full">
                <SelectValue placeholder="Select your region" />
              </SelectTrigger>
              <SelectContent>
                {shippingRegions.map((region) => (
                  <SelectItem key={region.id} value={region.id}>
                    {region.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Delivery Estimate */}
          {selectedRegionData && (
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-silver-700">
                <Clock className="h-5 w-5" />
                <span className="font-medium">Estimated delivery:</span>
              </div>
              
              <div className="p-4 bg-silver-50 rounded-lg border">
                <p className="text-lg font-semibold text-silver-900">
                  {selectedRegionData.minDays}–{selectedRegionData.maxDays} business days
                </p>
                
                {selectedRegionData.hasCustoms && (
                  <p className="text-sm text-silver-600 mt-1">
                    Customs processing may extend delivery time
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Important Note */}
          <div className="flex items-start space-x-2 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-amber-800">
              <strong>Note:</strong> Customs and peak seasons may add extra days, especially for jewelry.
            </p>
          </div>

          {/* Additional Info */}
          <div className="text-center text-xs text-silver-500 pt-2">
            <p>All shipping is via economy/postal service</p>
            <p>Business days exclude weekends and holidays</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
