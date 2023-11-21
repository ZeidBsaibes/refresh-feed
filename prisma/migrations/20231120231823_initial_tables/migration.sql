/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Cuisine` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[value]` on the table `Cuisine` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `value` to the `Cuisine` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cuisine" ADD COLUMN     "value" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Cuisine_name_key" ON "Cuisine"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Cuisine_value_key" ON "Cuisine"("value");
