/*
  Warnings:

  - You are about to drop the `_SavedLocationToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_SavedLocationToUser" DROP CONSTRAINT "_SavedLocationToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_SavedLocationToUser" DROP CONSTRAINT "_SavedLocationToUser_B_fkey";

-- DropTable
DROP TABLE "_SavedLocationToUser";

-- AddForeignKey
ALTER TABLE "SavedLocation" ADD CONSTRAINT "SavedLocation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
