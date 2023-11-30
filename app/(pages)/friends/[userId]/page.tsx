"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import LoadingFriendsSkeleton from "@/app/components/LoadingSkeletons/LoadingFriendsSkeleton/LoadingFriendsSkeleton";
import getFriends from "@/scripts/utils/getFriends";
import { useParams } from "next/navigation";
import Badge from "@/app/components/Badge/Badge";
import FriendCard from "@/app/components/FriendCard/FriendCard";
import Button from "@/app/components/Button/Button";
import approveFriend from "@/scripts/utils/approveFriend";

export default function Friends() {
  const [friends, setFriends] = useState(null);

  const capitalize = require("capitalize");

  const params = useParams();
  const { userId } = params;
  console.log("logged in user", userId);
  const statuses = ["approved", "pending"];

  const getAndSetFriends = async () => {
    const response = await getFriends(userId, statuses);
    setFriends(response);
  };

  const handleApprove = async (friendshipId, status) => {
    console.log(`friendship id`, friendshipId);
    const response = await approveFriend(friendshipId, status);
    window.location.reload();
  };

  useEffect(() => {
    getAndSetFriends();
  }, []);

  if (!friends) {
    return (
      <div aria-busy="true" aria-live="polite">
        <LoadingFriendsSkeleton count={20} />
      </div>
    );
  }

  if (friends) {
    return (
      <div className="bg-white dark:bg-black py-4 sm:py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-3xl sm:text-4xl my-4 font-bold tracking-tight text-gray-900 dark:text-white ">
              Your Friends
            </h1>
            <a
              href="/friends/add"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add a friend
            </a>
          </div>
          <ul
            role="list"
            className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {friends.map(
              ({ friend, status, friendshipId }) =>
                status === "approved" && (
                  <FriendCard key={friend.id} friend={friend} status={status} />
                )
            )}
          </ul>
        </div>

        {/* // pending friends */}

        <div className="mx-auto max-w-7xl my-8 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-xl sm:text-4xl my-4 font-bold tracking-tight italic text-gray-900 dark:text-white ">
              Pending
            </h1>
          </div>
          <ul
            role="list"
            className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {friends.map(
              ({ friend, status, friendshipId, receiverId }) =>
                status === "pending" && (
                  <div key={friend.id} className="flex-col">
                    <FriendCard friend={friend} status={status} />
                    <div className="mt-6  items-center  gap-x-6">
                      <Button
                        text={userId !== receiverId ? "Awaiting" : "Approve"}
                        variant={
                          userId !== receiverId ? "secondary" : "approve"
                        }
                        size={"sm"}
                        type={"button"}
                        onClick={
                          userId !== friend.id
                            ? null
                            : () => {
                                handleApprove(friendshipId, "approved");
                              }
                        }
                      />
                    </div>
                  </div>
                )
            )}
          </ul>
        </div>
      </div>
    );
  }
}
