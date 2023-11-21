"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import getLocationsForUser from "@/scripts/utils/getLocationsForUser";
import LocationCard from "@/app/components/LocationCard/LocationCard";

export default function UserLocationsPage() {
  const params = useParams();
  const { userId } = params;

  const [userLocations, setUserLocations] = useState(null);

  const getAndSetUserLocations = async () => {
    const data = await getLocationsForUser(userId);
    console.log(data);
    setUserLocations(data);
  };
  useEffect(() => {
    getAndSetUserLocations();
  }, []);

  console.log(params);

  if (userLocations && userId !== "undefined") {
    const { savedLocation } = userLocations;

    return savedLocation.map((savedLocation) => {
      return (
        <div className="container mx-auto my-5 sm:px-6 lg:px-8">
          <LocationCard data={savedLocation} />
        </div>
      );
    });

    return <></>;
  }

  return <div>loading...</div>;
}
