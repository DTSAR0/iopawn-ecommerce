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
    where: { slug: "silver-ring-4" }
  });

  if (!existingProduct) {
    const product = await db.product.create({
      data: {
        name: "Silver Ring 4",
        slug: "silver-ring-4",
        description: "925 Sterling Silver Ring 4",
        priceCents: 4400,
        stockQuantity: 2,
        categoryId: category.id,  
        featured: true
      }
    });
    console.log('✅ Product created:', product.name);
  } else {
    console.log('ℹ️  Product already exists:', existingProduct.name);
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
