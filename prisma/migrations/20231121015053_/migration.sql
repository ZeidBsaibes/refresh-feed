/*
  Warnings:

  - You are about to drop the column `name` on the `Dish` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[label]` on the table `Dish` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `label` to the `Dish` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Dish_name_key";

-- AlterTable
ALTER TABLE "Dish" DROP COLUMN "name",
ADD COLUMN     "label" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Dish_label_key" ON "Dish"("label");
