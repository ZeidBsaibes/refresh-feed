// import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

// const moment = require("moment");
// const capitalize = require("capitalize");
// import Image from "next/image";
// import Badge from "../Badge/Badge";
// import Star from "../Star/Star";

// export default function LocationCardSmall({ data }) {
//   const {
//     city,
//     country,
//     createdAt,
//     placeName,
//     cuisines,
//     LocationLocationType,
//     dishes,
//     photos,
//     rating,
//     id,
//   } = data;
//   //   return (
//   //     <li key={id} className="flex space-x-6 py-6">
//   //       <img
//   //         src={photos[0].url}
//   //         alt="alt text"
//   //         className="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"
//   //       />
//   //       <div className="flex-auto space-y-1">
//   //         <h3 className="text-gray-900">
//   //           <a href="/">{placeName}</a>
//   //         </h3>
//   //         <p>{`Added: ${moment(createdAt).fromNow()}`}</p>
//   //       </div>
//   //       <p classNameName="flex-none font-medium text-gray-900"></p>
//   //     </li>
//   //   );

//   return (
//     <div className="max-w-sm my-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
//       <a href="#">
//         {/* <img
//           className="rounded-t-lg"
//           src={photos[0].url}
//           height="200px"
//           alt=""
//         /> */}
//         <img
//           className="rounded-t-lg"
//           src={photos[0].url}
//           width="100%"
//           height="100%"
//           loading="lazy"
//           object-fit="cover"
//           alt={`image of ${placeName} location`}
//         />
//       </a>
//       <div className="p-5">
//         <a href="#">
//           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//             {placeName}
//           </h5>
//           <h5 className="mb-2 text-sm  tracking-tight text-gray-600 dark:text-white">
//             {city}
//           </h5>
//         </a>
//         <p className="mb-1  text-xs font-normal text-gray-500 dark:text-gray-400">
//           {`Added: ${moment(createdAt).fromNow()}`}
//         </p>
//         {cuisines.map(({ cuisine }) => {
//           return <Badge key={id} colour={"grey"} text={cuisine.label} />;
//         })}
//         <Star rating={parseFloat(rating).toFixed(1)} />
//       </div>
//     </div>
//   );
// }
