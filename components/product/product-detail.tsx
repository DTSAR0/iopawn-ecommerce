"use client"

import { useState } from "react"
import Image from "next/image"
import type { Product } from "@/data/products"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/store"
import { formatPrice } from "@/lib/utils"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { addItem, openCart } = useCartStore()

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const handleAddToCart = () => {
    addItem(product, quantity)
    openCart()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-silver-50">
            <Image
              src={product.images[currentImageIndex] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
            />
            {product.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>

          {/* Thumbnail Navigation */}
          {product.images.length > 1 && (
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    index === currentImageIndex ? "border-primary" : "border-silver-200 hover:border-silver-400"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Information */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h1 className="text-3xl font-light text-silver-900 mb-4">{product.name}</h1>
            <p className="text-silver-600 text-lg leading-relaxed mb-6">{product.description}</p>
            <p className="text-3xl font-light text-silver-900">{formatPrice(product.price)}</p>
          </div>

          {/* Specifications */}
          <div className="border-t border-silver-200 pt-8">
            <h3 className="text-lg font-medium text-silver-900 mb-4">Specifications</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-silver-600">Material</span>
                <span className="text-silver-900">{product.material}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-silver-600">Weight</span>
                <span className="text-silver-900">{product.weight}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-silver-600">Size</span>
                <span className="text-silver-900">{product.size}</span>
              </div>
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="border-t border-silver-200 pt-8 space-y-6">
            <div className="flex items-center space-x-4">
              <label htmlFor="quantity" className="text-silver-700 font-medium">
                Quantity
              </label>
              <div className="flex items-center border border-silver-300 rounded-xl">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  className="h-10 w-10"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-2 text-center min-w-[3rem]">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-10 w-10"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button onClick={handleAddToCart} size="lg" className="w-full text-lg py-4">
              Add to Cart
            </Button>
          </div>

          {/* Care Instructions */}
          <div className="border-t border-silver-200 pt-8">
            <h3 className="text-lg font-medium text-silver-900 mb-4">Care Instructions</h3>
            <ul className="text-silver-600 space-y-2 text-sm">
              <li>• Store in a dry place away from direct sunlight</li>
              <li>• Clean gently with a soft cloth</li>
              <li>• Avoid contact with perfumes and chemicals</li>
              <li>• Remove before swimming or exercising</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
