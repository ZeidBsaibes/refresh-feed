import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const cuid = require("cuid");
const prisma = new PrismaClient();

export const POST = async (req: Request, res: NextResponse) => {
  if (req.method === "POST") {
    const {
      userId,
      placeName,
      googleId,
      lat,
      lng,
      city,
      country,
      visited,
      visitedId,
      rating,
      waitingTime,
      cuisines,
      dishes,
      notes,
      locationTypes,
      photos,
      website,
    } = await req.json();

    try {
      const newLocation = await prisma.savedLocation.create({
        data: {
          // userId,
          placeName,
          googleId,
          lat,
          lng,
          city,
          country,
          rating,
          notes,
          photos,
          visited,
          website,
          user: {
            connect: { id: userId },
          },
        },
      });
      if (dishes) {
        for (const dish of dishes) {
          const newDish = await prisma.dish.create({
            data: {
              id: cuid(),
              label: dish.label,
              value: dish.value,
            },
          });

          await prisma.locationDish.create({
            data: {
              locationId: newLocation.id,
              dishId: newDish.id,
            },
          });
        }
      }

      await Promise.all(
        locationTypes.map((locationType) =>
          prisma.locationLocationType.create({
            data: {
              locationId: newLocation.id,
              locationTypeId: locationType.id,
            },
          })
        )
      );

      await Promise.all(
        cuisines.map((cuisine) =>
          prisma.locationCuisine.create({
            data: {
              locationId: newLocation.id,
              cuisineId: cuisine.id, // Extracting the ID from each cuisine object
            },
          })
        )
      );

      return NextResponse.json(newLocation, { status: 201 });
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 201 }
      );
    }
  } else {
    return NextResponse.json(
      { message: `Method ${req.method} Not Allowed` },
      { status: 405 }
    );
  }
};
