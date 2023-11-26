import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req, { params }) => {
  const userId = params.userId;

  try {
    const userLocations = await prisma.user.findUnique({
      where: {
        id: userId,
      },

      include: {
        SavedLocation: {
          where: {
            visited: true,
          },
          orderBy: {
            createdAt: "desc",
          },
          include: {
            dishes: {
              include: {
                dish: true,
              },
            },
            cuisines: {
              include: {
                cuisine: true,
              },
            },
            LocationLocationType: {
              include: {
                locationType: true,
              },
            },
          },
        },
      },
    });

    if (userLocations) {
      return NextResponse.json(userLocations);
    } else {
      return NextResponse.json({ message: "user has no locations" });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "An error occured whilst fetching the data",
    });
  }

  return NextResponse.json({ userid: userId });
};
