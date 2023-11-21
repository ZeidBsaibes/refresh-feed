import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req) => {
  try {
    const cuisines = await prisma.cuisine.findMany();

    if (cuisines.length > 0) {
      return NextResponse.json(cuisines);
    } else {
      return NextResponse.json({ message: `no cuisines found` });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "An error occured whilst fetching the data",
    });
  }
};
