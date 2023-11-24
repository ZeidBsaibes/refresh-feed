const moment = require("moment");
const capitalize = require("capitalize");
import Badge from "../Badge/Badge";
import Star from "../Star/Star";

export default function LocationCardHoriz({ data }) {
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
    <a
      href="#"
      className="flex flex-col my-4 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      {/* <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={photos[0].url}
        alt=""
        height="500px"
        width="500px"
      /> */}
      {}
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {placeName}
        </h5>
        <h5 className="mb-2 text-sm  tracking-tight text-gray-600 dark:text-white">
          {city}
        </h5>
        <p className="mb-1  text-xs font-normal text-gray-500 dark:text-gray-400">
          {`Added: ${moment(createdAt).fromNow()}`}
        </p>
        {cuisines.map(({ cuisine }) => {
          return (
            <Badge key={cuisine.id} colour={"grey"} text={cuisine.label} />
          );
        })}
        <Star rating={parseFloat(rating).toFixed(1)} />
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </a>
  );
}
