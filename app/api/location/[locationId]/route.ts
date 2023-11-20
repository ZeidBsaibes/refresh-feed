import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req, { params }) => {
  const locationId = params.locationId;

  try {
    const record = await prisma.savedLocation.findUnique({
      where: {
        id: locationId,
      },
    });

    if (record) {
      return Response.json(record);
    } else {
      return Response.json({ message: `location with this id not found` });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "An error occured whilst fetching the data",
    });
  }
};
