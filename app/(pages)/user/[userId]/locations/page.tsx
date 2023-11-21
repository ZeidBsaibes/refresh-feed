"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import getLocationsForUser from "@/scripts/utils/getLocationsForUser";

export default function UserLocationsPage() {
  const params = useParams();
  const { userId } = params;

  const [userLocations, setUserLocations] = useState(null);

  const getAndSetUserLocations = async (userId) => {
    const data = getLocationsForUser(userId);
    setUserLocations(data);
  };
  useEffect(() => {
    getAndSetUserLocations(userId);
  }, [userId]);

  console.log(params);

  // const { userId } = router.query;
  return <div>{`User locations page for user ${userId}`} </div>;
}
