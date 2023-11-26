import { Prisma, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req, res) {
  try {
    const users = await prisma.user.findMany({
      include: {
        _count: {
          select: { SavedLocation: true },
        },
      },
    });
    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
  }
  // return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request) {
  // Do whatever you want
  return NextResponse.json({ message: "Helloooo World" }, { status: 200 });
}

// Same logic to add a `PATCH`, `DELETE`...
