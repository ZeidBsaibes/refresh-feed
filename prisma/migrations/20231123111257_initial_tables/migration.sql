-- DropForeignKey
ALTER TABLE "SavedLocation" DROP CONSTRAINT "SavedLocation_user_id_fkey";

-- CreateTable
CREATE TABLE "_SavedLocationToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SavedLocationToUser_AB_unique" ON "_SavedLocationToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_SavedLocationToUser_B_index" ON "_SavedLocationToUser"("B");

-- AddForeignKey
ALTER TABLE "_SavedLocationToUser" ADD CONSTRAINT "_SavedLocationToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "SavedLocation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SavedLocationToUser" ADD CONSTRAINT "_SavedLocationToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
