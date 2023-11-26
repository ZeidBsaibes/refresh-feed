"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import getLocationsForUser from "@/scripts/utils/getLocationsForUser";
import { useSession } from "next-auth/react";
import LocationsMap from "@/app/components/LocationsMap/LocationsMap";
import Loading from "./loading";
import isUserOwner from "@/scripts/utils/isUserOwner";

import LocationCardHoriz from "@/app/components/LocationCardHoriz/LocationCardHoriz";

export default function UserLocationsPage() {
  const { data: session } = useSession();
  const params = useParams();

  const { userId } = params;

  const [userLocations, setUserLocations] = useState(null);
  const [Locations, setLocations] = useState(null);

  const getAndSetUserLocations = async () => {
    const data = await getLocationsForUser(userId);

    setUserLocations(data);
  };

  useEffect(() => {
    getAndSetUserLocations();
  }, []);

  // @ts-ignore

  if (userLocations && userId !== "undefined") {
    return (
      <>
        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row ">
            <div className="md:flex-1 p-2 overflow-auto h-[100vh]">
              <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                {
                  // @ts-ignore
                  isUserOwner(params.userId, session?.user?.userId)
                    ? "Your Saved Spots"
                    : `${userLocations.name}'s Spots`
                }
              </h1>
              <section>
                {userLocations.SavedLocation.map((location) => {
                  return (
                    <LocationCardHoriz key={location.id} data={location} />
                  );
                })}
              </section>
            </div>
            <div className="md:flex-1 p-2 overflow-auto h-[100vh]">
              <section>
                <div className="md:flex-1 p-2 h-[100vh]">
                  <LocationsMap data={userLocations.SavedLocation} />
                </div>
              </section>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
    </>
  );
}
