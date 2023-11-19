import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  if (req.method === "POST") {
    // console.log("this is the req", req);
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
      locationName,
      notes,
    } = await req.json();

    console.log(`placename is`, placeName);

    try {
      const newLocation = await prisma.savedLocation.create({
        data: {
          userId,
          placeName,
          googleId,
          lat,
          lng,
          city,
          country,
          visited: JSON.stringify(visited),
          visitedId,
          rating,
          waitingTime,
          cuisines: JSON.stringify(cuisines),
          locationName,
          notes,
        },
      });

      return res.status(201).json(newLocation);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  } else {
    return res
      .status(405)
      .json({ message: `Method ${req.method} Not Allowed` });
  }
};
