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
    where: { slug: "silver-ring-7" }
  });

  if (!existingProduct) {
    await db.product.create({
      data: {
        name: "Silver Ring 7",
        slug: "silver-ring-7",
        description: "925 Sterling Silver Ring 7",
        priceCents: 4100,
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
