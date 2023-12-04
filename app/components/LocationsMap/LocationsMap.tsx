"use client";

import { MapPinIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import * as React from "react";
import Map, { Marker, FullscreenControl } from "react-map-gl";
import MapMarker from "../MapMarker/MapMarker";
import MapPopUp from "../MapPopUp/MapPopUp";
import { all } from "axios";
const geoViewport = require("@mapbox/geo-viewport");

export default function LocationsMap({ data }) {
  const [popUpIsOpen, setPopUpIsOpen] = useState(false);
  const [clickedLocation, setClickedLocation] = useState(null);
  const handlePopupClick = (location) => {
    setClickedLocation(location);

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
  //center the map viewport based on the markers
  const findBounds = () => {
    const latsArray = [];
    const lngsArray = [];
    data.map((location) => {
      latsArray.push(Number(location.lat));
      lngsArray.push(Number(location.lng));
    });
    const minLat = Math.min(...latsArray);
    const maxLat = Math.max(...latsArray);
    const minLng = Math.min(...lngsArray);
    const maxLng = Math.max(...lngsArray);

    const bounds = [minLng, minLat, maxLng, maxLat];

    return bounds;
  };

  const mapInfo = geoViewport.viewport(findBounds(), [600, 480]);

  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      initialViewState={{
        // longitude: -0.1276,
        // latitude: 51.5072,
        longitude: mapInfo.center[0],
        latitude: mapInfo.center[1],
        zoom: mapInfo.zoom - 1.5,
        // zoom: 10,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      {data &&
        data.map((location) => {
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
      <FullscreenControl />
    </Map>
  );
}
