import axios from "axios";
import { NextResponse, NextRequest } from "next/server";

export const GET = async (req, { params }) => {
  if (!params) {
    return NextResponse.json({ message: "you need to provide a place Id" });
  }
  try {
    const { placeId } = params;

    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}&placeid=${placeId}`
    );

    if (!response.data.result) {
      return NextResponse.json({
        message: "there are no photos for this locatoin",
      });
    }
    const { photos } = response.data.result;

    console.log(photos);
    return NextResponse.json(photos);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "there was an error" });
  }
};
