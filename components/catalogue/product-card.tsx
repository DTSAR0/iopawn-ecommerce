"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { formatPrice } from "@/lib/utils";

type ProductFromApi = {
  id: string;
  name: string;
  slug: string;
  priceCents: number;
  material?: string;
  // API може вернути images як масив об’єктів або рядків —
  // позначаємо опційно обидва варіанти
  images?: { url: string }[] | string[];
  category?: { name: string };
};

interface ProductCardProps {
  product: ProductFromApi;
}

export function ProductCard({ product }: ProductCardProps) {
  // безпечний вибір першого зображення або плейсхолдера
  const firstImage =
    (product.images?.[0] as any)?.url ??
    (product.images?.[0] as string | undefined) ??
    "/placeholder.svg";

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group"
    >
      <Link href={`/product/${product.id}`}>
        <div className="bg-white rounded-2xl overflow-hidden shadow-silver hover:shadow-silver-lg transition-all duration-300">
          <div className="aspect-square overflow-hidden">
            <Image
              src={firstImage}
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

            {/* показуємо або назву матеріалу, або назву категорії, або прочерк */}
            <p className="text-sm text-silver-600 mb-1">
              {product.material ?? product.category?.name ?? "—"}
            </p>

            <p className="text-xl font-light text-silver-900">
              {formatPrice(product.priceCents / 100)}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
