-- CreateTable
CREATE TABLE "LocationDish" (
    "locationId" TEXT NOT NULL,
    "dishId" TEXT NOT NULL,

    CONSTRAINT "LocationDish_pkey" PRIMARY KEY ("locationId","dishId")
);

-- CreateTable
CREATE TABLE "Dish" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Dish_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LocationDish" ADD CONSTRAINT "LocationDish_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "SavedLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocationDish" ADD CONSTRAINT "LocationDish_dishId_fkey" FOREIGN KEY ("dishId") REFERENCES "Dish"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
