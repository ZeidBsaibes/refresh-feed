"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import LocationsMap from "@/app/components/LocationsMap/LocationsMap";
import Loading from "@/app/(pages)/user/[userId]/locations/loading";
import isUserOwner from "@/scripts/utils/isUserOwner";
import LocationCardHoriz from "@/app/components/LocationCardHoriz/LocationCardHoriz";
import getLocationsForUser from "@/scripts/utils/getLocationsForUser";
import getWishlistLocationsForUser from "@/scripts/utils/getWishlistLocationsForUser";
import Button from "../Button/Button";
import { PlusIcon } from "@heroicons/react/24/outline";
import EmptyStateList from "../EmptyStateList/EmptyStateList";

export default function ListAndMap({ type }) {
  const { data: session } = useSession();
  const params = useParams();
  console.log(type);

  const { userId } = params;

  const [userLocations, setUserLocations] = useState(null);

  const getAndSetLocations = async () => {
    if (type === "visited") {
      const data = await getLocationsForUser(userId);
      setUserLocations(data);
      return;
    }
    if (type === "wishlist") {
      const data = await getWishlistLocationsForUser(userId);
      setUserLocations(data);
      return;
    }
  };

  useEffect(() => {
    getAndSetLocations();
  }, []);

  const setPageTitle = (type) => {
    let pageTitle;
    if (type === "visited") {
      return (pageTitle = "Locations");
    }
    if (type === "wishlist") {
      return (pageTitle = "Wishlist");
    }
  };

  if (userLocations && userLocations.SavedLocation.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row ">
          <EmptyStateList />
        </div>
      </div>
    );
  }

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
                    ? `Your ${setPageTitle(type)}`
                    : `${userLocations.name}'s ${setPageTitle(type)}`
                }
              </h1>
              <div className="md:hidden">
                <Button
                  type={"button"}
                  size={"lg"}
                  variant={"primary"}
                  onClick={() => {
                    const element = document.getElementById("map");
                    if (element) {
                      element.scrollIntoView({ behavior: "instant" });
                    }
                  }}
                  text={"See Locations on Map"}
                />
              </div>
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
                <div id="map" className="md:flex-1 p-2 h-[100vh]">
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
