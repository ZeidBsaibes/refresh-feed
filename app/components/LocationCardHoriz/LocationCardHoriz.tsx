const moment = require("moment");
const capitalize = require("capitalize");
import Badge from "../Badge/Badge";
import Star from "../Star/Star";
import isUserOwner from "@/scripts/utils/isUserOwner";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import deleteLocation from "@/scripts/utils/deleteLocation";
import { useState } from "react";
import ModalDelete from "../ModalDelete/ModalDelete";
import Link from "next/link";

export default function LocationCardHoriz({ data, page = "default" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    user,
  } = data;

  const handleDeleteLocation = async (locationId, loggedInUserId) => {
    const response = await deleteLocation(locationId, loggedInUserId);
    return response;
  };

  const handleModal = (event) => {
    setIsModalOpen(!isModalOpen);

    event.preventDefault();
  };

  return (
    <>
      <article className="py-4 px-4">
        <div className="w-full pt-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link href={`/location/${id}`} aria-label="location card">
            <div className="px-5 pb-5">
              <p className="text-xs text-gray-500">
                {`Added: ${moment(createdAt).fromNow()} by ${user?.name} `}
              </p>
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {placeName}{" "}
              </h2>
              <h3 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                {city}{" "}
              </h3>
              <div className="flex items-center mt-2.5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <Star rating={parseFloat(rating).toFixed(2)} />
                </div>
                <span>
                  <h3 className="flex  ml-4 items-center text-gray-500 font-normal">
                    {cuisines.map(({ cuisine }) => (
                      <Badge
                        key={cuisine.id}
                        colour="green"
                        aria-label=" cuisine badges"
                        text={cuisine.label}
                      />
                    ))}
                  </h3>
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-900 dark:text-white mt-2.5">
                  {LocationLocationType.map((location) => (
                    <Badge
                      aria-label=" location type badges"
                      key={location.locationType.id}
                      colour="blue"
                      text={location.locationType.label}
                    />
                  ))}
                </span>
                <span className="font-bold text-gray-900 dark:text-white mt-2.5">
                  {
                    //@ts-ignore
                    isUserOwner(params.userId, session?.user?.userId) ? (
                      <button
                        //@ts-ignore
                        onClick={handleModal}
                        aria-label=" trash icon delete button"
                      >
                        <TrashIcon color={"red"} height={20} />
                      </button>
                    ) : (
                      ""
                    )
                  }
                </span>
              </div>
            </div>
          </Link>
          <div className="px-5 py-0"></div>
        </div>
      </article>
    </>
  );
}
