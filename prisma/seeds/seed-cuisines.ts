const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const cuisineData = [
  { label: "Italian" },
  { label: "Mexican" },
  { label: "Japanese" },
  // ...add other cuisines as needed
];

async function main() {
  console.log(`Start seeding ...`);
  for (const c of cuisineData) {
    const cuisine = await prisma.cuisine.create({
      data: c,
    });
    console.log(`Created cuisine with id: ${cuisine.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
