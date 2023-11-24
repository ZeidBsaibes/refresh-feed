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
        <p className="mx-4 text-sm leading-7 text-gray-400">{city}</p>
        <h3 className=" text-lg mx-4 font-semibold leading-8 text-gray-900">
          {cuisines.map(({ cuisine }) => (
            <Badge key={cuisine.id} colour="green" text={cuisine.label} />
          ))}
        </h3>
        <p className="mt mx-4 text-xs leading-7 text-gray-600"> {notes}</p>
        <ul role="list" className="mt-6 flex gap-x-6"></ul>
        <p className="mx-4 text-sm leading-7 text-gray-400">
          <span className=" text-xs leading-7 text-gray-600">
            Dishes recommended by {user.name}:
          </span>

          <ul>
            {dishes.map(({ dish }) => (
              <li key={dish.id}>
                <Badge colour="purple" text={dish.label} />
              </li>
            ))}
          </ul>
        </p>
      </>
    );
  }
}
