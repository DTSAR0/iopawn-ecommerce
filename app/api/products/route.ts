import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  // ?featured=true —> where.featured = true
  const featuredParam = searchParams.get("featured");
  const where =
    featuredParam === "true"
      ? { featured: true }
      : undefined;

  // ?limit=3 —> take: 3
  const limitParam = searchParams.get("limit");
  const take = limitParam ? Number(limitParam) : undefined;

  const products = await db.product.findMany({
    where,          // ← умова фільтра
    take,           // ← ліміт (необов’язково)
    orderBy: { createdAt: "desc" },
    include: { category: true },
  });

  return NextResponse.json(products);
}
