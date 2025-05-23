import { notFound } from "next/navigation"
import { products } from "@/data/products"
import { ProductDetail } from "@/components/product/product-detail"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  return <ProductDetail product={product} />
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}
