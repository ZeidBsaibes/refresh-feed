"use client";

import Autocomplete from "react-google-autocomplete";
import { useState, useEffect } from "react";

export default function GoogleMapsAutoComplete({ apiKey, onInput }) {
  const [placeSelected, setPlaceSelected] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [placeObject, setPlaceObject] = useState(null);

  const fieldStyle = {
    width: "100%",
    border: "1px solid #cbd5e1",
    borderRadius: "4px",
    color: "black",
  };

  const mapCentre = { lat: 51.5072, lng: 0.1276 };

  const handlePlaceSelected = (place) => {
    if (place) {
      const placeAsObject = {
        placeName: place.name,
        googleId: place.place_id,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        city: place.address_components[2].long_name,
        country: place.address_components[5].long_name,
        website: place.website,
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
    ],
    bounds: {
      north: mapCentre.lat + 0.5,
      south: mapCentre.lat - 0.5,

      east: mapCentre.lng + 0.5,
      west: mapCentre.lng - 0.5,
    },

    strictBounds: false,
  };

  return (
    <>
      <Autocomplete
        apiKey={apiKey}
        style={fieldStyle}
        placeholder="Start typing the location name"
        onPlaceSelected={(place) => {
          setPlaceSelected(place);
        }}
        options={autocompleteOptions}
      />
    </>
  );
}
