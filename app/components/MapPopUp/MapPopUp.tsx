import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Star from "../Star/Star";
import Badge from "../Badge/Badge";

const MapPopUp = ({ index, marker, onClose }) => {
  const popUpStyle = {
    color: "blue",

    padding: "10px",
    fontFamily: "Arial",
  };
  return (
    <Popup
      latitude={marker.lat}
      longitude={marker.lng}
      onClose={onClose}
      closeButton={true}
      closeOnClick={false}
      closeOnMove={true}
      className={"mapbox__popup"}
    >
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {marker.placeName}
          </h5>
          <Star key={marker.id} rating={parseFloat(marker.rating).toFixed(1)} />
          {marker.cuisines.map(({ cuisine }) => {
            return (
              <Badge key={cuisine.id} colour={"grey"} text={cuisine.label} />
            );
          })}
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {marker.notes && `${marker.notes}`}
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
    </Popup>
  );
};

export default MapPopUp;
