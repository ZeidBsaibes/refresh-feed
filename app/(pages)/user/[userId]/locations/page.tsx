"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import getLocationsForUser from "@/scripts/utils/getLocationsForUser";
import LocationCard from "@/app/components/LocationCard/LocationCard";
import LocationCardSmall from "@/app/components/LocationCardSmall/LocationCardSmall";

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
    console.log(`location data from locations page`, userLocations);
  }, []);

  console.log(params);

  if (userLocations && userId !== "undefined") {
    return (
      <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
        {userLocations.SavedLocation.map((location) => {
          return <LocationCardSmall key={location.id} data={location} />;
        })}
      </div>
    );
  }

  return <div>loading...</div>;
}
