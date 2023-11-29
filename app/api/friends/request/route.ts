import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req: Request) => {
  if (req.method === "GET") {
    const body = await req.json();
    console.log(body);
    // const { userId } = await req.json();
    // console.log(userId);
    //     try {
    //       const friends = await prisma.friendship.findMany({
    //         where: {
    //           OR: [
    //             {
    //               senderId: userId,
    //               status: "approved",
    //             },
    //             {
    //               receiverId: userId,
    //               status: "approved",
    //             },
    //           ],
    //         },
    //         include: {
    //           sender: true,
    //           receiver: true,
    //         },
    //       });
    //       const friendDetails = friends.map((friendship) => {
    //         return friendship.senderId === userId
    //           ? friendship.receiver
    //           : friendship.sender;
    //       });

    //       return NextResponse.json({ friendDetails });
    //     } catch (error) {
    //       NextResponse.json({
    //         message: "something went wrong with getting your friends",
    //       });
    //     }
    //   }
  }
};

export const POST = async (req: Request) => {
  if (req.method === "POST") {
    const { senderId, receiverId } = await req.json();

    console.log(`sender`, senderId);
    console.log(`receiver`, receiverId);

    if (senderId && receiverId) {
      try {
        const friendRequest = await prisma.friendship.create({
          data: {
            senderId: senderId,
            receiverId: receiverId,
            status: "pending",
          },
        });

        return NextResponse.json(
          {
            message: "Friend request sent successfully",
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
