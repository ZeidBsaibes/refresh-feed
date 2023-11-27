"use client";

import getLocation from "@/scripts/utils/getLocation";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import ImageGallery from "@/app/components/ImageGallery/ImageGallery";
import LocationCardDetail from "@/app/components/LocationDetail/LocationCardDetail";
import LoadingDetailSkeleton from "@/app/components/LoadingSkeletons/LocationDetailPage/LoadingDetailSkeleton";
import LoadingGallerySkeleton from "@/app/components/LoadingSkeletons/LoadingGallerySkeleton/LoadingGallerySkeleton";

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
        <ImageGallery locationGoogleId={locationData.googleId} />
        <LocationCardDetail data={locationData} />
      </>
    );
  } else {
    return (
      <>
        <LoadingGallerySkeleton />
        <LoadingDetailSkeleton />
      </>
    );
  }
}
export default LocationDetailPage;
