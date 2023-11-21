/*
  Warnings:

  - You are about to drop the column `cuisines` on the `SavedLocation` table. All the data in the column will be lost.
  - You are about to drop the column `visited` on the `SavedLocation` table. All the data in the column will be lost.
  - You are about to drop the column `visitedId` on the `SavedLocation` table. All the data in the column will be lost.
  - You are about to drop the `Cuisine` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Dish` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Photo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Visited` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Dish" DROP CONSTRAINT "Dish_locationId_fkey";

-- DropForeignKey
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_locationId_fkey";

-- AlterTable
ALTER TABLE "SavedLocation" DROP COLUMN "cuisines",
DROP COLUMN "visited",
DROP COLUMN "visitedId";

-- DropTable
DROP TABLE "Cuisine";

-- DropTable
DROP TABLE "Dish";

-- DropTable
DROP TABLE "Photo";

-- DropTable
DROP TABLE "Visited";
