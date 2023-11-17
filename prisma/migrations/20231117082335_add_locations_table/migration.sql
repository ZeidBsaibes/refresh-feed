-- CreateTable
CREATE TABLE "restaurant_visits" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "restaurantName" TEXT NOT NULL,
    "notes" TEXT,

    CONSTRAINT "restaurant_visits_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "restaurant_visits" ADD CONSTRAINT "restaurant_visits_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
