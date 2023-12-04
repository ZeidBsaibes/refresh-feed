import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getToken } from "next-auth/jwt";

const prisma = new PrismaClient();

export const GET = async (req) => {
  const searchQuery = req.nextUrl.searchParams.get("search");
  const token = await getToken({ req });
  const userId = token.userId;

  if (!searchQuery) {
    return NextResponse.json({ message: "please enter a search term" });
  }

  if (!token) {
    return NextResponse.json({ message: "you must be logged in to search" });
  }
  try {
    const friends = await prisma.friendship.findMany({
      where: {
        OR: [
          { senderId: userId, status: "approved" },
          { receiverId: userId, status: "approved" },
        ],
      },
    });

    const friendIds = friends.map((friend) =>
      friend.senderId === userId ? friend.receiverId : friend.senderId
    );

    const results = await prisma.savedLocation.findMany({
      where: {
        userId: { in: friendIds },
        OR: [
          {
            placeName: {
              contains: searchQuery,
              mode: "insensitive",
            },
          },
          {
            city: {
              contains: searchQuery,
              mode: "insensitive",
            },
          },
          {
            notes: {
              contains: searchQuery,
              mode: "insensitive",
            },
          },
          {
            cuisines: {
              some: {
                cuisine: {
                  label: {
                    contains: searchQuery,
                    mode: "insensitive",
                  },
                },
              },
            },
          },
          {
            dishes: {
              some: {
                dish: {
                  label: {
                    contains: searchQuery,
                    mode: "insensitive",
                  },
                },
              },
            },
          },
        ],
      },

      include: {
        user: true,
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

    return NextResponse.json({ results });
  } catch (error) {
    console.error(error);
  }
};
