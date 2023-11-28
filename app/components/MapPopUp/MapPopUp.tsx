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
        <a href={`/location/${marker.id}`}>
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
      </div>
    </Popup>
  );
};

export default MapPopUp;
