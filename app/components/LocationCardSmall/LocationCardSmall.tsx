import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

const moment = require("moment");
const capitalize = require("capitalize");
import Image from "next/image";

export default function LocationCardSmall({ data }) {
  console.log("from location card", data);
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
  //   return (
  //     <li key={id} className="flex space-x-6 py-6">
  //       <img
  //         src={photos[0].url}
  //         alt="alt text"
  //         className="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"
  //       />
  //       <div className="flex-auto space-y-1">
  //         <h3 className="text-gray-900">
  //           <a href="/">{placeName}</a>
  //         </h3>
  //         <p>{`Added: ${moment(createdAt).fromNow()}`}</p>
  //       </div>
  //       <p classNameName="flex-none font-medium text-gray-900"></p>
  //     </li>
  //   );

  return (
    <div className="max-w-sm my-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <a href="#">
        {/* <img
          className="rounded-t-lg"
          src={photos[0].url}
          height="200px"
          alt=""
        /> */}
        <Image
          className="rounded-t-lg"
          src={photos[0].url}
          width={photos[0].width / 5}
          height={photos[0].height / 5}
          objectFit="'cover"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {placeName}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {`Added: ${moment(createdAt).fromNow()}`}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
