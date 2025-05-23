import { ProductGrid } from "@/components/catalogue/product-grid"
import { products } from "@/data/products"

export default function CataloguePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light text-silver-900 mb-4">Our Collection</h1>
        <p className="text-silver-600 max-w-2xl mx-auto">
          Discover our carefully curated selection of modern jewellery, each piece designed to embody elegance and
          contemporary style.
        </p>
      </div>
      <ProductGrid products={products} />
    </div>
  )
}
