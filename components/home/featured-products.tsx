"use client"

import { products } from "@/data/products"
import { ProductCard } from "@/components/catalogue/product-card"
import { motion } from "framer-motion"

export function FeaturedProducts() {
  const featuredProducts = products.filter((product) => product.featured)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light text-silver-900 mb-4">Featured Collection</h2>
          <p className="text-silver-600 max-w-2xl mx-auto">
            Discover our most coveted pieces, each one carefully crafted to embody the perfect balance of modern design
            and timeless elegance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
