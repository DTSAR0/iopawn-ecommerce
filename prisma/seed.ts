import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Clear existing data (but keep categories)
  console.log('🧹 Clearing existing data...');
  await db.order.deleteMany();
  await db.product.deleteMany();
  console.log('✅ Existing orders and products cleared');

  // Create or find category
  console.log('📂 Checking for category...');
  const category = await db.category.upsert({
    where: {
      slug: "rings"
    },
    update: {
      // Keep existing category data
    },
    create: {
      name: "Rings",
      slug: "rings"
    }
  });
  console.log('✅ Category ready:', category.name);

  // Create products
  console.log('📦 Creating products...');
  
  const products = [
    {
      name: "Silver Ring 5",
      slug: "silver-ring-5",
      description: "925 Sterling Silver Ring 5",
      priceCents: 4400,
      stockQuantity: 25,
      categoryId: category.id,
      featured: true
    },
    {
      name: "Gold Ring 2",
      slug: "gold-ring-2", 
      description: "14K Gold Ring 2",
      priceCents: 8900,
      stockQuantity: 15,
      categoryId: category.id,
      featured: false
    },
    {
      name: "Platinum Ring 3",
      slug: "platinum-ring-3",
      description: "Platinum Ring 3",
      priceCents: 12000,
      stockQuantity: 8,
      categoryId: category.id,
      featured: true
    }
  ];

  for (const productData of products) {
    const product = await db.product.create({
      data: productData
    });
    console.log(`✅ Product created: ${product.name} (Stock: ${product.stockQuantity})`);
  }

  console.log('🎉 Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
