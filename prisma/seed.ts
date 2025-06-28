import { PrismaClient } from '../lib/generated/prisma';

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
    where: { slug: "silver-ring" }
  });

  if (!existingProduct) {
    await db.product.create({
      data: {
        name: "Silver Ring",
        slug: "silver-ring",
        description: "925 Sterling Silver Ring",
        priceCents: 3999,
        categoryId: category.id
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
