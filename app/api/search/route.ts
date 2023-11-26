import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req) => {
  const searchQuery = req.nextUrl.searchParams.get("search");

  if (!searchQuery) {
    return NextResponse.json({ message: "please enter a search term" });
  }
  try {
    const results = await prisma.savedLocation.findMany({
      where: {
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
        ],
      },
    });

    return NextResponse.json({ results });
  } catch (error) {
    console.error(error);
  }
};
