import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req) => {
  try {
    const locationTypes = await prisma.locationType.findMany();

    if (locationTypes.length > 0) {
      return NextResponse.json(locationTypes);
    } else {
      return NextResponse.json({ message: `no location types found` });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "An error occured whilst fetching the data",
    });
  }
};
