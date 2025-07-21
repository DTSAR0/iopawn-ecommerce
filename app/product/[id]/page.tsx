import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product/product-detail";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await db.product.findUnique({
    where: { id: params.id },
    include: { category: true },
  });

  if (!product) return notFound();

  // Adapt Prisma product to ProductDetail's expected shape
  const productForDetail = {
    ...product,
    images: [], // TODO: Replace with actual images if available
    material: "—", // Placeholder, update if you add this field
    weight: "—",   // Placeholder
    size: "—",     // Placeholder
    price: product.priceCents / 100, // ProductDetail expects price in dollars
    featured: false, // Placeholder, update if you add this field
    description: product.description ?? "", // Ensure string
    category: product.category?.name ?? "—", // Convert to string
  };

  return <ProductDetail product={productForDetail} />;
}
