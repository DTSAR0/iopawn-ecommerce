import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

async function main() {
  await db.category.create({
    data: {
      name: 'Rings',
      products: {
        create: {
          name: 'Silver Ring',
          slug: 'silver-ring',
          description: '925 sterling silver ring',
          priceCents: 3999,
        },
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
