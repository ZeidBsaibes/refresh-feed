import Autocomplete from "react-google-autocomplete";
import { useState, useEffect } from "react";

export default function GoogleMapsAutoComplete({ apiKey }) {
  const [placeSelected, setPlaceSelected] = useState(null);
  const [gps, setGPS] = useState(null);

  const handlePlaceSelected = (place) => {
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();

    setPlaceSelected(place);
    setGPS({ lat: lat, lng: lng });
  };

  return (
    <>
      <Autocomplete
        apiKey={apiKey}
        onPlaceSelected={(place) => {
          handlePlaceSelected(place);
        }}
        options={{
          types: ["restaurant", "cafe", "bar", "meal_takeaway", "store"],
        }}
      />
    </>
  );
}
