"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import LoadingFriendsSkeleton from "@/app/components/LoadingSkeletons/LoadingFriendsSkeleton/LoadingFriendsSkeleton";

export default function Friends() {
  const [users, setUsers] = useState(null);

  const getAndSetUsers = async () => {
    const response = await axios.get("/api/users");
    setUsers(response.data);
  };

  useEffect(() => {
    getAndSetUsers();
  }, []);

  if (!users) {
    return <LoadingFriendsSkeleton count={20} />;
  }

  if (users) {
    return (
      <div className="bg-white dark:bg-black py-16 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-3xl sm:text-4xl my-4 font-bold tracking-tight text-gray-900 dark:text-white ">
              Your Friends
            </h1>
          </div>
          <ul
            role="list"
            className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {users.map((user) => (
              <Link key={user.id} href={`/user/${user.id}/locations`}>
                <li>
                  <img
                    className="mx-auto h-24 w-24 rounded-full"
                    src={user.image}
                    alt=""
                  />
                  <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">
                    {user.name}
                  </h3>
                  <p className="text-sm leading-6 dark:text-white text-gray-600">
                    {user?._count.SavedLocation > 1 &&
                      `${user?._count.SavedLocation} locations`}
                    {user?._count.SavedLocation === 0 && `No locations`}
                    {user?._count.SavedLocation === 1 &&
                      `${user?._count.SavedLocation} locations`}
                  </p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
