"use client";

import { MapPinIcon } from "@heroicons/react/20/solid";
import * as React from "react";
import Map, { Marker } from "react-map-gl";

export default function LocationsMap() {
  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      initialViewState={{
        longitude: -0.08049,
        latitude: 51.52636,
        zoom: 12,
      }}
      style={{ width: 600, height: "100%" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker longitude={-0.08} latitude={51.52636} anchor="bottom">
        <MapPinIcon height={60} color="red" />
      </Marker>
      <Marker longitude={-0.08049} latitude={51.52636} anchor="bottom">
        <MapPinIcon height={60} color="red" />
      </Marker>
      <Marker longitude={-0.0806} latitude={51.6} anchor="bottom">
        <MapPinIcon height={60} color="red" />
      </Marker>
    </Map>
  );
}
