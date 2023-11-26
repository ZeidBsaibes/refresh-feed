import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req, { params }) => {
  const userId = params.userId;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (user) {
      return NextResponse.json(user);
    } else {
      return NextResponse.json({ message: `no user found` });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "An error occured whilst fetching the data",
    });
  }
};
