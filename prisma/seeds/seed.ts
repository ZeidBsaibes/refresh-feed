const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const cuisineData = [
  { value: "italian", label: "Italian" },
  { value: "mexican", label: "Mexican" },
  { value: "japanese", label: "Japanese" },
];

const locationTypeData = [
  { value: "restaurant", label: "Restaurant" },
  { value: "takeaway", label: "Takeaway" },
  { value: "bar", label: "Bar" },
  { value: "cafe", label: "Cafe" },
  { value: "pub", label: "Pub" },
];

const DishData = [{ value: "pizza", label: "Pizza" }];

async function main() {
  console.log(`Start seeding ...`);

  for (const c of cuisineData) {
    const cuisine = await prisma.cuisine.create({
      data: c,
    });
    console.log(`Created cuisine with id: ${cuisine.id}`);
  }

  for (const l of locationTypeData) {
    const locationType = await prisma.locationType.create({
      data: l,
    });
    console.log(`Created location with id: ${locationType.id}`);
  }

  for (const l of DishData) {
    const dish = await prisma.dish.create({
      data: l,
    });
    console.log(`Created location with id: ${dish.id}`);
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
