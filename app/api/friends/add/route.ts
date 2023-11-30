import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  if (req.method === "POST") {
    const { senderId, email } = await req.json();

    console.log(senderId, email);

    if (senderId && email) {
      try {
        // get receiverId from email sent by requester
        const receiverId = await prisma.user.findUnique({
          where: {
            email: email,
          },
          select: {
            id: true, // Only fetch the id
          },
        });
        console.log(receiverId, senderId);
        if (!receiverId) {
          return NextResponse.json(
            {
              message:
                "If a user exists with this email they will be able to approve your request",
            },
            { status: 200 }
          );
        }

        if (receiverId.id === senderId) {
          return NextResponse.json(
            {
              message: "You cannot add yourself as a friend",
            },
            { status: 200 }
          );
        }

        // Check if a friendship already exists between senderId and receiverId in either direction
        const existingFriendship = await prisma.friendship.findFirst({
          where: {
            OR: [
              {
                AND: [{ senderId: senderId }, { receiverId: receiverId.id }],
              },
              {
                AND: [{ senderId: receiverId.id }, { receiverId: senderId }],
              },
            ],
          },
        });

        // If a friendship exists, do not create a new one
        if (existingFriendship) {
          return NextResponse.json(
            {
              message: "Friendship request already exists",
            },
            { status: 409 } // Conflict status code
          );
        }

        // If no existing friendship, create a new one
        const friendRequest = await prisma.friendship.create({
          data: {
            senderId: senderId,
            receiverId: receiverId.id,
            status: "pending",
          },
        });

        return NextResponse.json(
          {
            message: "Pending friendship created successfully",
            friendRequest: friendRequest,
          },
          { status: 200 }
        );
      } catch (error) {
        console.error(error);
        return NextResponse.json(
          {
            message: "error sending friend request",
          },
          { status: 500 }
        );
      }
    } else {
      return NextResponse.json(
        {
          message: "sender or requester Id missing",
        },
        { status: 400 }
      );
    }
  } else {
    return NextResponse.json(
      { message: `Method ${req.method} Not Allowed` },
      { status: 405 }
    );
  }
};

export const PATCH = async (req: Request) => {
  if (req.method === "PATCH") {
    try {
      const { status, friendshipId } = await req.json();
      // validate inputs

      if (!status || !friendshipId) {
        return NextResponse.json(
          { message: "missing required fields" },
          { status: 400 }
        );
      } else {
        const updatedFriendship = await prisma.friendship.update({
          where: { id: friendshipId },
          data: { status },
        });
        return NextResponse.json({
          message: "friendship status updated",
          updatedFriendship,
        });
      }
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        {
          message: "something went wrong could not update friend status",
        },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { message: `Method ${req.method} Not Allowed` },
      { status: 405 }
    );
  }
};
