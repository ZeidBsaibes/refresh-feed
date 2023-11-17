const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const locations = [
    {
      userId: "clp0139nm0002rqpc8e7rxzdu",
      latitude: 40.7128,
      longitude: -74.006,
      locationName: "New York City",
      notes: "The Big Apple",
    },
    {
      userId: "clp0139nm0002rqpc8e7rxzdu",
      latitude: 34.0522,
      longitude: -118.2437,
      locationName: "Los Angeles",
      notes: "City of Angels",
    },
    {
      userId: "clp0139nm0002rqpc8e7rxzdu",
      latitude: 51.5074,
      longitude: -0.1278,
      locationName: "London",
      notes: "The Capital of England",
    },
    {
      userId: "clp0139nm0002rqpc8e7rxzdu",
      latitude: 35.6895,
      longitude: 139.6917,
      locationName: "Tokyo",
      notes: "The Capital of Japan",
    },
    {
      userId: "clp0139nm0002rqpc8e7rxzdu",
      latitude: 48.8566,
      longitude: 2.3522,
      locationName: "Paris",
      notes: "The City of Love",
    },
  ];

  for (const location of locations) {
    await prisma.savedLocation.create({
      data: location,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
