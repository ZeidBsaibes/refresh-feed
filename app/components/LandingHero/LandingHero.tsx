"use client";

import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import LocationsMap from "../LocationsMap/LocationsMap";
import getLocationsForUser from "@/scripts/utils/getLocationsForUser";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function LandingHero() {
  const [landingLocations, setLandingLocations] = useState(null);

  const getAndSetLandingLocations = async () => {
    const data = await getLocationsForUser("clpa167o10000iwkr9cklden3");

    setLandingLocations(data);
  };
  useEffect(() => {
    getAndSetLandingLocations();
  }, []);

  return (
    <div className="bg-white container mx-auto lg:px-8 ">
      <section className="relative isolate pt-8 sm: px-2">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        ></div>
        <div className="py-8 sm:py-8 lg:pb-0">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                <span className="underline decoration-solid decoration-indigo-600">
                  Trusted
                </span>{" "}
                food and drink spots from{" "}
                <span className="underline decoration-wavy decoration-indigo-600">
                  your friends
                </span>
              </h1>
              <h2 className="mt-6 text-lg leading-8 text-gray-600">
                Food and drink recommendations from friends. Forget search
                engines, social media and food critics, go to the places tried
                and tested by people you actually trust.
              </h2>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/add-location"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
              </div>
            </div>
            <div>
              <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mapbox__container lg:pb-0 relative isolate pt-8">
        {landingLocations?.SavedLocation && (
          <LocationsMap data={landingLocations.SavedLocation} />
        )}
      </section>
    </div>
  );
}
