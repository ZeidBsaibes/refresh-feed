"use client";

import { MapPinIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import * as React from "react";
import Map, { Marker } from "react-map-gl";
import MapMarker from "../MapMarker/MapMarker";
import MapPopUp from "../MapPopUp/MapPopUp";

export default function LocationsMap({ data }) {
  const [popUpIsOpen, setPopUpIsOpen] = useState(false);
  const [clickedLocation, setClickedLocation] = useState(null);
  const handlePopupClick = (location) => {
    setClickedLocation(location);
    console.log(location);
    setPopUpIsOpen(true);
  };

  const handlePopupClose = () => {
    setClickedLocation(null);
    setPopUpIsOpen(false);
  };

  const handleMapClick = () => {
    if (popUpIsOpen) {
      setPopUpIsOpen(false);
    }
  };

  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      initialViewState={{
        longitude: -0.08049,
        latitude: 51.52636,
        zoom: 12,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      // onClick={() => {
      //   handleMapClick();
      // }}
    >
      {data.map((location) => {
        return (
          <MapMarker
            key={location.id}
            location={location}
            onClick={handlePopupClick}
          />
        );
      })}
      {popUpIsOpen && (
        <MapPopUp
          index={clickedLocation.id}
          marker={clickedLocation}
          onClose={handlePopupClose}
        />
      )}
    </Map>
  );
}
