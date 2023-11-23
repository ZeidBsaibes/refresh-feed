"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import getLocationsForUser from "@/scripts/utils/getLocationsForUser";
import LocationCard from "@/app/components/LocationCard/LocationCard";
import LocationCardSmall from "@/app/components/LocationCardSmall/LocationCardSmall";
import LocationsMap from "@/app/components/LocationsMap/LocationsMap";

export default function UserLocationsPage() {
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

  console.log(params);

  if (userLocations && userId !== "undefined") {
    return (
      <>
        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row ">
            <div className="md:flex-1 p-2 overflow-auto h-[100vh]">
              {userLocations.SavedLocation.map((location) => {
                return <LocationCardSmall key={location.id} data={location} />;
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

  return <div>loading...</div>;
}
