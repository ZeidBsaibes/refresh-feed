-- CreateTable
CREATE TABLE "Cuisine" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Cuisine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LocationCuisine" (
    "locationId" TEXT NOT NULL,
    "cuisineId" INTEGER NOT NULL,

    CONSTRAINT "LocationCuisine_pkey" PRIMARY KEY ("locationId","cuisineId")
);

-- AddForeignKey
ALTER TABLE "LocationCuisine" ADD CONSTRAINT "LocationCuisine_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "SavedLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocationCuisine" ADD CONSTRAINT "LocationCuisine_cuisineId_fkey" FOREIGN KEY ("cuisineId") REFERENCES "Cuisine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
