"use client";

import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import Map, { Marker } from "react-map-gl";
import { MapPinIcon } from "@heroicons/react/20/solid";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const TestMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-0.08049);
  const [lat, setLat] = useState(51.52636);
  const [zoom, setZoom] = useState(12);
  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      initialViewState={{
        longitude: lng,
        latitude: lat,
        zoom,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker longitude={lng} latitude={lat}>
        <MapPinIcon style={{ fontSize: "30px", color: "red", zIndex:  }} />
      </Marker>
    </Map>
  );
};

export default TestMap;
