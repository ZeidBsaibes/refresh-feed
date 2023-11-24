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
    notes,
    name,
  } = data;
  return (
    <a href={`/location/${id}`}>
      <div className="flex my-6 flex-col justify-center">
        <div className=" w- full relative flex flex-col  rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
          <div className="w-full  bg-white flex flex-col space-y-2 p-3">
            <div className="flex justify-between item-center"></div>
            <p className="md:text-sm text-gray-500 text-base">{city}</p>
            <h3 className="font-black text-gray-800 md:text-3xl text-xl">
              {placeName}
              <Star rating={parseFloat(rating).toFixed(2)} />
            </h3>
            <p className="md:text-sm text-gray-500 text-base">
              {`Added: ${moment(createdAt).fromNow()}`}
            </p>
            <div className="flex items-center text-2xl text-gray-500 font-normal">
              {LocationLocationType.map((location) => (
                <Badge
                  key={location.locationType.id}
                  colour="blue"
                  text={location.locationType.label}
                />
              ))}
            </div>
            <div className="flex items-center text-2xl text-gray-500 font-normal">
              {cuisines.map(({ cuisine }) => (
                <Badge key={cuisine.id} colour="green" text={cuisine.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
