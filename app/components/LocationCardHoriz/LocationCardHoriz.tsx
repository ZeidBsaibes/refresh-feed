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

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <article>
      <div className="flex my-6 flex-col justify-center">
        <ModalDelete
          show={isModalOpen}
          data={data}
          handleOpen={handleModal}
          handleDelete={handleDeleteLocation}
        />
        <div className=" w-full relative flex flex-col  rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
          <a href={`/location/${id}`} aria-label="location card">
            <div className="w-full bg-white flex flex-col space-y-2 p-3">
              <p className="md:text-sm text-gray-500 text-base">{city}</p>
              <h2 className="font-black text-gray-800 md:text-3xl text-xl">
                {placeName}
                <Star rating={parseFloat(rating).toFixed(2)} />
              </h2>
              <p className="md:text-sm text-gray-500 text-base">
                {`Added: ${moment(createdAt).fromNow()} by ${user?.name} `}
              </p>
              <h3 className="flex items-center text-2xl text-gray-500 font-normal">
                {LocationLocationType.map((location) => (
                  <Badge
                    aria-label=" location type badges"
                    key={location.locationType.id}
                    colour="blue"
                    text={location.locationType.label}
                  />
                ))}
              </h3>
              <h3 className="flex items-center text-2xl text-gray-500 font-normal">
                {cuisines.map(({ cuisine }) => (
                  <Badge
                    key={cuisine.id}
                    colour="green"
                    aria-label=" cuisine badges"
                    text={cuisine.label}
                  />
                ))}
              </h3>
            </div>
          </a>
          <div className="flex items-center text-2xl text-gray-500 font-normal">
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
          </div>
        </div>
      </div>
    </article>
  );
}
