import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

import { getToken } from "next-auth/jwt";

const prisma = new PrismaClient();

export const PATCH = async (req) => {
  if (req.method === "PATCH") {
    const token = await getToken({ req });
    const { friendshipId, status } = await req.json();

    try {
      if (!token) {
        return NextResponse.json(
          { message: `You must be logged in to do this` },
          { status: 403 }
        );
      }
      if (!friendshipId || !status) {
        return NextResponse.json(
          { message: `Missing friendship Id or Status` },
          { status: 400 }
        );
      }

      const friendship = await prisma.friendship.findUnique({
        where: { id: friendshipId },
      });

      if (!friendship) {
        return NextResponse.json(
          { message: `Friendship does not exist to update ` },
          { status: 400 }
        );
      }

      if (friendship.receiverId !== token.userId) {
        return NextResponse.json(
          { message: `You are not allowed to approve this friendship ` },
          { status: 403 }
        );
      }

      const updatedFriendship = await prisma.friendship.update({
        where: { id: friendshipId },
        data: { status },
      });

      return NextResponse.json({ updatedFriendship }, { status: 200 });
    } catch (error) {
      console.error(error);
    }

    return NextResponse.json(
      { message: `friendship status updated` },
      { status: 200 }
    );
  }
};
