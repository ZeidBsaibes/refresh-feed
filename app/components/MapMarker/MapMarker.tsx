import { Marker } from "react-map-gl";
import { MapPinIcon, FlagIcon } from "@heroicons/react/24/outline";

export default function MapMarker({ location, color = "blue", onClick }) {
  const handleClick = () => {
    onClick(location);
  };

  return (
    <Marker
      longitude={location.lng}
      latitude={location.lat}
      anchor="bottom"
      onClick={handleClick}
    >
      <MapPinIcon height={40} color={color} />
    </Marker>
  );
}
