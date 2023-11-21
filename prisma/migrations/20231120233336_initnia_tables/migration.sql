/*
  Warnings:

  - You are about to drop the column `name` on the `Cuisine` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[label]` on the table `Cuisine` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `label` to the `Cuisine` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Cuisine_name_key";

-- AlterTable
ALTER TABLE "Cuisine" DROP COLUMN "name",
ADD COLUMN     "label" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Cuisine_label_key" ON "Cuisine"("label");
