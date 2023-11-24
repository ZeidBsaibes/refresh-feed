"use client";

import React from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import getLocationsForUser from "@/scripts/utils/getLocationsForUser";

import LocationsMap from "@/app/components/LocationsMap/LocationsMap";
import Loading from "./loading";
import { Suspense } from "react";
import LocationCardHoriz from "@/app/components/LocationCardHoriz/LocationCardHoriz";

export default function UserLocationsPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  console.log(searchParams.get("wishlist"));

  console.log(`these are the search params`, searchParams);
  console.log(`these are the  params`, params);
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

  console.log(params);

  if (userLocations && userId !== "undefined") {
    return (
      <>
        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row ">
            <div className="md:flex-1 p-2 overflow-auto h-[100vh]">
              <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                Your Saved Locations
              </h1>
              {userLocations.SavedLocation.map((location) => {
                return <LocationCardHoriz key={location.id} data={location} />;
              })}
            </div>
            <div className="md:flex-1 p-2 h-[100vh]">
              <LocationsMap data={userLocations.SavedLocation} />
            </div>
          </div>
        </div>
      </>

      // <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
      //   {userLocations.SavedLocation.map((location) => {
      //     return <LocationCardSmall key={location.id} data={location} />;
      //   })}
      // </div>
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
