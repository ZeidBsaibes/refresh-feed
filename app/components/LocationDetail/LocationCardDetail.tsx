const moment = require("moment");
const capitalize = require("capitalize");
import Badge from "../Badge/Badge";
import Star from "../Star/Star";
import { useEffect, useState } from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import getUser from "@/scripts/utils/getUser";
import LoadingDetailSkeleton from "../LoadingSkeletons/LocationDetailPage/LoadingDetailSkeleton";
import ImageGallery from "../ImageGallery/ImageGallery";
import { MapIcon } from "@heroicons/react/24/outline";

export default function LocationCardDetail({ data }) {
  const {
    city,
    country,
    createdAt,
    placeName,
    cuisines,
    LocationLocationType,
    dishes,
    photos,
    rating,
    id,
    notes,
    userId,
    user,
    website,
    googleId,
  } = data;

  if (data && user) {
    return (
      <>
        <>
          {/* <ImageGallery locationGoogleId={locationData.googleId} /> */}
          {/* <LocationCardDetail data={locationData} /> */}

          <div className="bg-white dark:bg-black">
            <div className="pb-16 sm:pb-24">
              <div className="mx-6 mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
                  <div className="lg:col-span-5 lg:col-start-8">
                    <p className="text-sm text-gray-700">
                      {cuisines.map(({ cuisine }) => (
                        <Badge
                          key={cuisine.id}
                          colour="green"
                          text={cuisine.label}
                          aria-label="cuisine badge"
                        />
                      ))}
                    </p>
                    <div className="flex justify-between">
                      <h1 className="text-3xl font-medium text-gray-900 dark:text-white">
                        {placeName}
                      </h1>
                      <Star rating={parseFloat(rating).toFixed(2)} />
                    </div>

                    <div className="items-center">
                      <h3 className="text-xs  dark:text-white text-gray-600">
                        {`Added: ${moment(createdAt).fromNow()} by ${
                          user.name
                        }`}
                      </h3>
                      <h2 className="text-sm leading-7 text-gray-400 dark:text-white">
                        {city}
                      </h2>
                    </div>
                  </div>
                  <div className="lg:col-span-5 lg:col-start-8">
                    <div className="px-0 ">
                      {LocationLocationType.map((location) => (
                        <Badge
                          aria-label=" location type badges"
                          key={location.locationType.id}
                          colour="blue"
                          text={location.locationType.label}
                        />
                      ))}{" "}
                    </div>
                  </div>

                  {/* Image gallery */}
                  <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
                    <ImageGallery locationGoogleId={googleId} />

                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8"></div>
                  </div>

                  <div className="lg:col-span-5">
                    <div>
                      <h2 className="text-sm font-medium text-gray-900">
                        <div className="text-xs leading-7 text-gray-600 dark:text-white">
                          {notes?.length > 0 ? `${user.name} says:` : ""}
                          <p className="italic text-sm">
                            {notes?.length > 0 ? `"${notes}"` : ""}
                          </p>
                        </div>

                        <span className="bottom-6 text-xs leading-7  text-gray-600 dark:text-white">
                          {dishes?.length > 0
                            ? `Items recommended by ${user.name}`
                            : ""}
                        </span>

                        <ul className="">
                          {dishes?.map(({ dish }) => (
                            <Badge
                              key={dish.id}
                              colour="purple"
                              text={dish?.label}
                              aria-label="dish badge"
                            />
                          ))}
                        </ul>
                        <div className="bottom-6 text-xs py-4 text-gray-600 dark:text-white">
                          <a href={website}>
                            <GlobeAltIcon height={20} />
                            <h3>Visit Website</h3>
                          </a>
                        </div>
                        <div className="bottom-6 text-xs text-gray-600 dark:text-white">
                          <a
                            href={`https://www.google.com/maps/place/?q=place_id:${googleId}`}
                          >
                            <MapIcon height={20} />
                            <h3>Go There</h3>
                          </a>
                        </div>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* <h3 className="mt-6 text-lg mx-4 font-semibold leading-8 text-gray-900">
          {LocationLocationType.map((location) => (
            <Badge
              key={location.locationType.id}
              colour="blue"
              text={location.locationType.label}
              aria-label="location type badge badge"
            />
          ))}
        </h3>

        <h1 className="text-3xl mx-4 leading-7 font-bold dark:text-white text-gray-900">
          {placeName}
        </h1>
        <h3 className="mx-4 text-xs leading-7 dark:text-white text-gray-600">
          {`Added: ${moment(createdAt).fromNow()} by ${user.name}`}
        </h3>
        <h2 className="mx-4 text-sm leading-7 text-gray-400">{city}</h2>
        <h3 className=" text-lg mx-4 font-semibold leading-8 text-gray-900">
          {cuisines.map(({ cuisine }) => (
            <Badge
              key={cuisine.id}
              colour="green"
              text={cuisine.label}
              aria-label="cuisine badge"
            />
          ))}
        </h3>
        <p className="mt mx-4 text-xs leading-7 text-gray-600"> {notes}</p>

        <span className="bottom-6 px-4 text-xs leading-7 text-gray-600">
          Dishes recommended by {user.name}
        </span>

        <ul className="mx-4">
          {dishes.map(({ dish }) => (
            <li key={dish.id}>
              <Badge
                colour="purple"
                text={dish.label}
                aria-label="dish badge"
              />
            </li>
          ))}
        </ul>
        <span className="mx-8 bottom-6text-xs leading-7 text-gray-600">
          <GlobeAltIcon height={20} />
          <h3>Visit Website</h3>
        </span> */}
      </>
    );
  }
}
