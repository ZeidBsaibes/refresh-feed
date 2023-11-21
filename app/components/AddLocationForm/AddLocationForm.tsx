// @ts-nocheck
"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import GoogleMapsAutoComplete from "../GoogleMapsAutoComplete/GoogleMapsAutoComplete";
import RadioGroup from "../RadioGroup/RadioGroup";
import NumberSlider from "../NumberSlider/NumberSlider";
import InputWithIcon from "../InputWithIcon/InputWithIcon";
import InputWithCreate from "../InputWithCreate/InputWithCreate";
import InputWithFixed from "../InputWithFixed/InputWithFixed";
import Button from "../Button/Button";
import FreeTextInput from "../FreeTextInput/FreeTextInput";
import postLocation from "@/scripts/utils/postLocation";
import getCuisines from "@/scripts/utils/getCuisines";
import getLocationTypes from "@/scripts/utils/getLocationTypes";
import getDishes from "@/scripts/utils/getDishes";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AddLocationForm() {
  const [availableLocationTypes, setAvailableLocationTypes] = useState(null);
  const [availableCuisines, setAvailableCuisines] = useState(null);
  const [dishesAutocomplete, setDishesAutoComplete] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [visitedData, setVisitedData] = useState(null);
  const [rating, setRating] = useState(0.5);
  const [cuisines, setCuisines] = useState(null);
  const [locationTypes, setLocationTypes] = useState(null);
  const [waitingTime, setWaitingTime] = useState(null);
  const [dishes, setDishes] = useState(null);
  const [notes, setNotes] = useState(null);
  const [photos, setPhotos] = useState(null);

  const { data: session } = useSession();

  const getAndSetCuisines = async () => {
    const data = await getCuisines();
    setAvailableCuisines(data);
  };

  const getAndSetLocationTypes = async () => {
    const data = await getLocationTypes();
    setAvailableLocationTypes(data);
  };

  const getAndSetDishes = async () => {
    const data = await getDishes();
    setDishesAutoComplete(data);
  };

  useEffect(() => {
    getAndSetCuisines();
    getAndSetLocationTypes();
    getAndSetDishes();
  }, []);

  const handleLocationInput = (locationObject) => {
    setLocationData(locationObject);
  };

  const handleVistedInput = (visitedObject) => {
    setVisitedData(visitedObject);
  };

  const handleRatingInput = (rating) => {
    setRating(rating);
  };

  const handleCuisineInput = (cuisineObject) => {
    setCuisines(cuisineObject);
  };

  const handleLocationTypeInput = (locationTypeObject) => {
    setLocationTypes(locationTypeObject);
  };

  const handleWaitingTimeInput = (time) => {
    setWaitingTime(time);
  };

  const handleDishesInput = (dishes) => {
    setDishes(dishes);
  };

  const handleNotesInput = (notes) => {
    setNotes(notes);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      userId: session.user.userId,
      placeName: locationData.placeName,
      googleId: locationData.googleId,
      lat: locationData.lat,
      lng: locationData.lng,
      city: locationData.city,
      country: locationData.country,
      // visitedData make tis return a boolean
      rating,
      waitingTime,
      cuisines,
      locationTypes,
      photos: locationData.photos,
      notes,
      dishes,
    };
    try {
      const response = await postLocation(formData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <GoogleMapsAutoComplete
            apiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}`}
            onInput={(locationObject) => {
              handleLocationInput(locationObject);
            }}
          />
          <RadioGroup
            title=""
            subtitle="have you been here before"
            onInput={handleVistedInput}
          />
          <NumberSlider onInput={handleRatingInput} />
          <InputWithFixed
            onInput={handleCuisineInput}
            title="Cuisine"
            data={availableCuisines}
          />
          <InputWithFixed
            onInput={handleLocationTypeInput}
            title="Location Type"
            data={availableLocationTypes}
          />
          <InputWithIcon
            title="Waiting Time"
            placeholder="Waiting Time"
            icon={"\u231B"}
            onInput={handleWaitingTimeInput}
          />
          Favourite Dishes
          <InputWithCreate
            placeholder="Add menu items you'd recommend"
            title="Dishes/Drinks you'd recommend"
            onInput={handleDishesInput}
            data={dishesAutocomplete && dishesAutocomplete}
          />
          <FreeTextInput
            label=""
            title="Notes"
            placeholder="Add anything you want to mention"
            onInput={handleNotesInput}
          />
        </div>
      </div>
      <Button text="Add Place" type="submit" size="lg" variant="primary" />
      <Button text="Cancel" type="button" size="lg" variant="seconary" />
      {locationData && <p>{locationData.placeName}</p>}
      {locationData && <p>{locationData.city}</p>}
      {visitedData && <p> {visitedData.title}</p>}
      {rating && <p>{rating}</p>}
      {cuisines && <p>{cuisines[0]?.label}</p>}
      {cuisines && <p>{cuisines[1]?.label}</p>}
      {cuisines && <p>{cuisines[2]?.label}</p>}
      {cuisines && <p>{cuisines[3]?.label}</p>}
      {locationTypes && <p>{locationTypes[0]?.label}</p>}
      {locationTypes && <p>{locationTypes[1]?.label}</p>}
      {locationTypes && <p>{locationTypes[2]?.label}</p>}
      {waitingTime && <p>{waitingTime}</p>}
    </form>
  );
}
