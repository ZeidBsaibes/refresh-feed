"use client";

import getLocation from "@/scripts/utils/getLocation";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import ImageGallery from "@/app/components/ImageGallery/ImageGallery";
import LocationCardDetail from "@/app/components/LocationDetail/LocationCardDetail";

function LocationDetailPage() {
  const { locationId } = useParams();

  const [locationData, setLocationData] = useState(null);

  const getAndSetLocationData = async () => {
    const data = await getLocation(locationId);
    setLocationData(data);
  };

  useEffect(() => {
    getAndSetLocationData();
  }, []);

  if (locationData) {
    return (
      <>
        <ImageGallery images={locationData.photos} />
        <LocationCardDetail data={locationData} />
      </>
    );
  } else {
    return (
      <>
        <p>Loading</p>
      </>
    );
  }
}
export default LocationDetailPage;
