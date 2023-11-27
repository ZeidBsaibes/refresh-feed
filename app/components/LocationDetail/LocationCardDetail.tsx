const moment = require("moment");
const capitalize = require("capitalize");
import Badge from "../Badge/Badge";
import Star from "../Star/Star";
import { useEffect, useState } from "react";
import axios from "axios";
import getUser from "@/scripts/utils/getUser";
import LoadingDetailSkeleton from "../LoadingSkeletons/LocationDetailPage/LoadingDetailSkeleton";

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
  } = data;

  const [user, setUser] = useState(null);

  const getAndSetUser = async () => {
    const data = await getUser(userId);
    console.log(data);
    setUser(data);
  };

  useEffect(() => {
    getAndSetUser();
  }, []);

  if (!data || !user) {
    return <p>Loading</p>;
  }

  if (data && user) {
    return (
      <>
        <h3 className="mt-6 text-lg mx-4 font-semibold leading-8 text-gray-900">
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
        <p className="mx-4 text-xs leading-7 dark:text-white text-gray-600">
          {" "}
          {`Added: ${moment(createdAt).fromNow()} by ${user.name}`}
        </p>
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

        <span className="mx-4 -bottom-6text-xs leading-7 text-gray-600">
          Dishes recommended by {user.name}:
        </span>

        <ul>
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
      </>
    );
  }
}
