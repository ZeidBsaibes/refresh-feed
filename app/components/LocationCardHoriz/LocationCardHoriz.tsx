const moment = require("moment");
const capitalize = require("capitalize");
import Badge from "../Badge/Badge";
import Star from "../Star/Star";
import isUserOwner from "@/scripts/utils/isUserOwner";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import deleteLocation from "@/scripts/utils/deleteLocation";

export default function LocationCardHoriz({ data }) {
  const { data: session } = useSession();
  const params = useParams();
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

  const handleDeleteLocation = async (locationId, loggedInUserId) => {
    event.stopPropagation();
    const response = await deleteLocation(locationId, loggedInUserId);
    return response;
  };

  return (
    <div className="flex my-6 flex-col justify-center">
      <div className=" w- full relative flex flex-col  rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
        <a href={`/location/${id}`}>
          <div className="w-full  bg-white flex flex-col space-y-2 p-3">
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
        </a>
        <div className="flex items-center text-2xl text-gray-500 font-normal">
          {
            //@ts-ignore
            isUserOwner(params.userId, session?.user?.userId) ? (
              <button
                className="z-50"
                //@ts-ignore
                onClick={() => handleDeleteLocation(id, session?.user?.userId)}
              >
                <TrashIcon color={"red"} height={20} />
              </button>
            ) : (
              <button
                className="z-50"
                //@ts-ignore
                onClick={() => handleDeleteLocation(id, session?.user?.userId)}
              >
                <TrashIcon color={"red"} height={20} />
              </button>
            )
          }
        </div>
      </div>
    </div>
  );
}
