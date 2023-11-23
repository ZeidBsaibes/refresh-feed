import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

const moment = require("moment");
const capitalize = require("capitalize");
import Image from "next/image";
import Badge from "../Badge/Badge";
import Star from "../Star/Star";

export default function LocationCardSmall({ data }) {
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
  } = data;

  return (
    <div className="max-w-sm my-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={photos[0].url}
          width="100%"
          height="100%"
          loading="lazy"
          object-fit="cover"
          alt={`image of ${placeName} location`}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {placeName}
          </h5>
          <h5 className="mb-2 text-sm  tracking-tight text-gray-600 dark:text-white">
            {city}
          </h5>
        </a>
        <p className="mb-1  text-xs font-normal text-gray-500 dark:text-gray-400">
          {`Added: ${moment(createdAt).fromNow()}`}
        </p>
        {cuisines.map(({ cuisine }) => {
          return (
            <Badge key={cuisine.id} colour={"grey"} text={cuisine.label} />
          );
        })}
        <Star rating={parseFloat(rating).toFixed(1)} />
      </div>
    </div>
  );
}
