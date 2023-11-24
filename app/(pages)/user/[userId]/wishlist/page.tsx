"use client";

import { useSearchParams } from "next/navigation";
import { useParams } from "next/navigation";

export default function Wishlist() {
  const searchParams = useSearchParams();

  console.log(`these are the search params`, searchParams.get("wishlist"));
  return <div>Wishlist Page</div>;
}
