"use client";

import getLocation from "@/scripts/utils/getLocation";
const moment = require("moment");

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import ImageGallery from "@/app/components/ImageGallery/ImageGallery";
import LocationCardDetail from "@/app/components/LocationDetail/LocationCardDetail";
import LoadingDetailSkeleton from "@/app/components/LoadingSkeletons/LocationDetailPage/LoadingDetailSkeleton";
import LoadingGallerySkeleton from "@/app/components/LoadingSkeletons/LoadingGallerySkeleton/LoadingGallerySkeleton";
import Star from "@/app/components/Star/Star";
import Badge from "@/app/components/Badge/Badge";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { MapIcon } from "@heroicons/react/24/outline";
import LottieLoader from "@/app/components/LottieLoader/LottieLoader";

function LocationDetailPage() {
  const { locationId } = useParams();

  const [locationData, setLocationData] = useState(null);

  const getAndSetLocationData = async () => {
    const data = await getLocation(locationId);
    setLocationData(data);
  };

  useEffect(() => {
    getAndSetLocationData();
  }, [getAndSetLocationData]);

  if (locationData) {
    const {
      city,
      country,
      createdAt,
      placeName,
      cuisines,
      LocationLocationType,
      dishes,
      photos,
      rating,
      id,
      notes,
      userId,
      user,
      website,
      googleId,
    } = locationData;

    return (
      <>
        <LocationCardDetail data={locationData} />
      </>
    );
  } else {
    return (
      <>
        <LottieLoader />
      </>
    );
  }
}
export default LocationDetailPage;
