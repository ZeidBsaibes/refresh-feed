/*
  Warnings:

  - Added the required column `photos` to the `SavedLocation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SavedLocation" ADD COLUMN     "photos" JSONB NOT NULL;
