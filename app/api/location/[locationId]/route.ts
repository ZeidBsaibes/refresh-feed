import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req, { params }) => {
  const locationId = params.locationId;
  console.log(locationId);
  try {
    // Extracting locationId from the URL parameters

    const locationWithDetails = await prisma.savedLocation.findUnique({
      where: {
        id: locationId, // Casting to string if necessary
      },
      include: {
        cuisines: {
          include: {
            cuisine: true,
          },
        },
        dishes: {
          include: {
            dish: true,
          },
        },
        LocationLocationType: {
          include: {
            locationType: true,
          },
        },
      },
    });

    if (locationWithDetails) {
      return NextResponse.json(locationWithDetails);
    } else {
      return NextResponse.json({ message: "Location not found" });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal server error" });
  }
};
