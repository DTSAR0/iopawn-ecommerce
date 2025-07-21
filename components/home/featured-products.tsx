// !!  НЕ пиши 'use client'  — тоді компонент виконається на сервері
import { db } from "@/lib/prisma";
import { ProductCard } from "@/components/catalogue/product-card";

// (опціонально) кеш на 60 с, щоб не дерти БД на кожний перегляд
export const revalidate = 60;

export default async function FeaturedProducts() {
  const featuredProducts = await db.product.findMany({
    where: { featured: true },
    take: 3,
    orderBy: { updatedAt: "desc" }, // щоб вибирати найсвіжіші
  });

  if (!featuredProducts.length) return null; // база ще пуста

  return (
    <section className="py-12 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Collection</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
