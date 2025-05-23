"use client"

import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/data/products"
import { formatPrice } from "@/lib/utils"
import { motion } from "framer-motion"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3, ease: "easeOut" }} className="group">
      <Link href={`/product/${product.id}`}>
        <div className="bg-white rounded-2xl overflow-hidden shadow-silver hover:shadow-silver-lg transition-all duration-300">
          <div className="aspect-square overflow-hidden">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-medium text-silver-900 mb-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-silver-600 mb-1">{product.material}</p>
            <p className="text-xl font-light text-silver-900">{formatPrice(product.price)}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
