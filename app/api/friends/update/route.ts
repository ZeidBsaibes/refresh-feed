import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

import { getToken } from "next-auth/jwt";

const prisma = new PrismaClient();

export const PATCH = async (req) => {
  if (req.method === "PATCH") {
    const { friendshipId, status } = await req.json();
    const token = await getToken({ req });

    console.log(`friendShipId`, friendshipId);
    console.log(`status`, status);
    console.log(token, "token");

    return NextResponse.json(
      { message: `this is the update endpoint, status is `, status },
      { status: 200 }
    );
  }
};
