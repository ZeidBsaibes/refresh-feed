-- DropForeignKey
ALTER TABLE "LocationCuisine" DROP CONSTRAINT "LocationCuisine_locationId_fkey";

-- DropForeignKey
ALTER TABLE "LocationDish" DROP CONSTRAINT "LocationDish_locationId_fkey";

-- DropForeignKey
ALTER TABLE "LocationLocationType" DROP CONSTRAINT "LocationLocationType_locationId_fkey";

-- AddForeignKey
ALTER TABLE "LocationDish" ADD CONSTRAINT "LocationDish_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "SavedLocation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocationCuisine" ADD CONSTRAINT "LocationCuisine_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "SavedLocation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocationLocationType" ADD CONSTRAINT "LocationLocationType_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "SavedLocation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
