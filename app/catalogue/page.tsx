import { ProductGrid } from "@/components/catalogue/product-grid"
export const dynamic = 'force-dynamic';

export default async function CataloguePage() {
  const base =
  process.env.NEXT_PUBLIC_SITE_URL // продакшн / preview
  ?? `http://localhost:${process.env.PORT ?? 3000}`; // dev fallback
const res = await fetch(`${base}/api/products`, { next: { revalidate: 60 }});
const products = await res.json()
  
  

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
  );
}

