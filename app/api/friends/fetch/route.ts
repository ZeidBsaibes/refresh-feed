import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  if (req.method === "POST") {
    const { userId, statuses } = await req.json();
    console.log(userId);
    console.log(statuses);
    try {
      const friends = await prisma.friendship.findMany({
        where: {
          OR: [
            {
              senderId: userId,
              status: {
                in: statuses,
              },
            },
            {
              receiverId: userId,
              status: {
                in: statuses,
              },
            },
          ],
        },
        include: {
          sender: true,
          receiver: true,
        },
      });
      const friendDetails = friends.map((friendship) => {
        const isSender = friendship.senderId === userId;

        return {
          friend: isSender ? friendship.receiver : friendship.sender,
          status: friendship.status,
          friendshipId: friendship.id,
        };
      });

      // sort approved first
      friendDetails.sort((a, b) => {
        if (a.status === "pending" && b.status !== "pending") {
          return 1; // move 'a' to the end
        } else if (a.status !== "pending" && b.status === "pending") {
          return -1; // move 'b' to the end
        }
        return 0; // keep original order
      });

      return NextResponse.json(friendDetails);
    } catch (error) {
      NextResponse.json({
        message: "something went wrong with getting your friends",
      });
    }
  }
};
