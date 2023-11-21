/*
  Warnings:

  - The `photos` column on the `SavedLocation` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "SavedLocation" DROP COLUMN "photos",
ADD COLUMN     "photos" JSONB[];
