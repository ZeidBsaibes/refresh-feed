import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

import { getToken } from "next-auth/jwt";

const prisma = new PrismaClient();

export const GET = async (req, { params }) => {
  const locationId = params.locationId;

  try {
    // Extracting locationId from the URL parameters

    const locationWithDetails = await prisma.savedLocation.findUnique({
      where: {
        id: locationId,
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

export const DELETE = async (req, { params }) => {
  const token = await getToken({ req });
  const locationToDelete = params.locationId;

  const locationOwnerId = await prisma.savedLocation.findUnique({
    where: {
      id: locationToDelete,
    },
    select: {
      userId: true,
    },
  });

  try {
    if (!token) {
      return NextResponse.json({
        message: `you must be logged in to delete locations`,
      });
    }

    if (locationOwnerId.userId !== token.userId) {
      return NextResponse.json({
        message: "you are not allowed to delete this location",
      });
    } else {
      const deletedLocation = await prisma.savedLocation.delete({
        where: {
          id: locationToDelete,
        },
      });
      return NextResponse.json({ message: `you deleted ${deletedLocation}` });
    }
  } catch (error) {
    console.error(error);
  }
};
