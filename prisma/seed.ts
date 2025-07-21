import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function main() {
  const category = await db.category.upsert({
    where: {
      slug: "rings"
    },
    update: {},
    create: {
      name: "Rings",
      slug: "rings"
    }
  });

  const existingProduct = await db.product.findUnique({
    where: { slug: "silver-ring-3" }
  });

  if (!existingProduct) {
    await db.product.create({
      data: {
        name: "Silver Ring 3",
        slug: "silver-ring-3",
        description: "925 Sterling Silver Ring 3",
        priceCents: 4500,
        categoryId: category.id,  
        featured: true
      }
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
