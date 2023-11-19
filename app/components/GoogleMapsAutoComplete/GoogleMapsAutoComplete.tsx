"use client";

import Autocomplete from "react-google-autocomplete";
import { useState, useEffect } from "react";

export default function GoogleMapsAutoComplete({ apiKey, onInput }) {
  const [placeSelected, setPlaceSelected] = useState(null);
  const [gps, setGPS] = useState(null);
  const [placeObject, setPlaceObject] = useState(null);

  const handlePlaceSelected = (place) => {
    if (place) {
      const placeAsObject = {
        placeName: place.name,
        googleId: place.place_id,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        city: place.address_components[2].long_name,
        country: place.address_components[5].long_name,
        photos: place.photos.slice(0, 3).map((photo) => {
          return {
            height: photo.height,
            width: photo.width,
            html_attributions: photo.html_attributions,
            url: photo.getUrl(),
          };
        }),
      };

      setPlaceObject(placeAsObject);
      console.log(placeObject);
    }
  };

  useEffect(() => {
    handlePlaceSelected(placeSelected);
  }, [placeSelected]);

  useEffect(() => {
    onInput(placeObject);
  }, [placeObject, onInput]);

  const autocompleteOptions = {
    types: ["restaurant", "cafe", "bar", "meal_takeaway", "store"], // specify types of places
    fields: [
      "address_components",
      "formatted_address",
      "geometry",
      "name",
      "opening_hours",
      "photos",
      "place_id",
      "rating",
      "reviews",
      "types",
      "website",
    ], // specify fields from PlaceResult to be included
  };

  return (
    <>
      <Autocomplete
        apiKey={apiKey}
        style={{ color: "black" }}
        // onPlaceSelected={(place) => {
        //   handlePlaceSelected(place);
        // }}

        onPlaceSelected={(place) => {
          setPlaceSelected(place);
        }}
        options={autocompleteOptions}
      />
    </>
  );
}
