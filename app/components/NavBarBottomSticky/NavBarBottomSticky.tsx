"use client";

import {
  MapPinIcon,
  UserGroupIcon,
  SparklesIcon,
  MapIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";

export default function NavBarBottomSticky() {
  const { data: session } = useSession();
  return (
    <div
      aria-label="sticky bottom nav mobile"
      className="md:invisible fixed bottom-0 left-0 z-50 w-full h-16 bg-gray-800 border-t border-gray-200 dark:bg-gray-800 dark:border-gray-600"
    >
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <a
          aria-label="Add Spot"
          href="/add-location"
          className="inline-flex flex-col items-center justify-center px-2 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <MapPinIcon height={30} color={"rgb(107 114 128)"} />
          <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Add Spot
          </span>
        </a>
        <a
          aria-label="Friends"
          //@ts-ignore
          href={`/friends/${session?.user?.userId}`}
          className="inline-flex flex-col items-center justify-center px-2 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <UserGroupIcon height={30} color={"rgb(107 114 128)"} />
          <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Friends
          </span>
        </a>
        <a
          //@ts-ignore
          href={`/user/${session?.user?.userId}/wishlist`}
          aria-label="Wish List"
          className="inline-flex flex-col items-center justify-center px-2 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <SparklesIcon height={30} color={"rgb(107 114 128)"} />
          <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Wish List
          </span>
        </a>
        <a
          // @ts-ignore
          href={`/user/${session?.user?.userId}/locations`}
          aria-label="Your List"
          className="inline-flex flex-col items-center justify-center px-2 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <MapIcon height={30} color={"rgb(107 114 128)"} />
          <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            Your List
          </span>
        </a>
      </div>
    </div>
  );
}
