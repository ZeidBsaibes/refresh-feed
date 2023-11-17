/*
  Warnings:

  - You are about to drop the `restaurant_visits` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "restaurant_visits" DROP CONSTRAINT "restaurant_visits_user_id_fkey";

-- DropTable
DROP TABLE "restaurant_visits";

-- CreateTable
CREATE TABLE "saved_locations" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "locationName" TEXT NOT NULL,
    "notes" TEXT,

    CONSTRAINT "saved_locations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "saved_locations" ADD CONSTRAINT "saved_locations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
