import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: Request, res: NextApiResponse) => {
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
          notes,
        },
      });
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
