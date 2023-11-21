-- CreateTable
CREATE TABLE "LocationType" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "savedLocationId" TEXT,

    CONSTRAINT "LocationType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LocationLocationType" (
    "locationId" TEXT NOT NULL,
    "locationTypeId" INTEGER NOT NULL,

    CONSTRAINT "LocationLocationType_pkey" PRIMARY KEY ("locationId","locationTypeId")
);

-- CreateIndex
CREATE UNIQUE INDEX "LocationType_label_key" ON "LocationType"("label");

-- CreateIndex
CREATE UNIQUE INDEX "LocationType_value_key" ON "LocationType"("value");

-- AddForeignKey
ALTER TABLE "LocationType" ADD CONSTRAINT "LocationType_savedLocationId_fkey" FOREIGN KEY ("savedLocationId") REFERENCES "SavedLocation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocationLocationType" ADD CONSTRAINT "LocationLocationType_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "SavedLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocationLocationType" ADD CONSTRAINT "LocationLocationType_locationTypeId_fkey" FOREIGN KEY ("locationTypeId") REFERENCES "LocationType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
