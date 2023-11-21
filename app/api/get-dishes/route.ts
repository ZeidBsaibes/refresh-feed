import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req) => {
  try {
    const dishes = await prisma.dish.findMany();

    if (dishes.length > 0) {
      return NextResponse.json(dishes);
    } else {
      return NextResponse.json({ message: `no dishes found` });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "An error occured whilst fetching the data",
    });
  }
};
