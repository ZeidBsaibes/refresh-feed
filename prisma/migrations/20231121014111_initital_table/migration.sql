/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Dish` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[value]` on the table `Dish` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `value` to the `Dish` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dish" ADD COLUMN     "value" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Dish_name_key" ON "Dish"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Dish_value_key" ON "Dish"("value");
