"use client";

import { useState } from "react";
import GoogleMapsAutoComplete from "../GoogleMapsAutoComplete/GoogleMapsAutoComplete";
import RadioGroup from "../RadioGroup/RadioGroup";
import NumberSlider from "../NumberSlider/NumberSlider";
import InputWithIcon from "../InputWithIcon/InputWithIcon";
import InputWithCreate from "../InputWithCreate/InputWithCreate";
import InputWithFixed from "../InputWithFixed/InputWithFixed";
import Button from "../Button/Button";
import FreeTextInput from "../FreeTextInput/FreeTextInput";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AddLocationForm() {
  const [locationData, setLocationData] = useState(null);
  const [visitedData, setVisitedData] = useState(null);
  const [rating, setRating] = useState(0.5);
  const [cuisines, setCuisines] = useState(null);
  const [locationType, setLocationType] = useState(null);
  const [waitingTime, setWaitingTime] = useState(null);
  const [dishes, setDishes] = useState(null);
  const [notes, setNotes] = useState(null);

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
    setLocationType(locationTypeObject);
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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(
      "location",
      locationData,
      "visited",
      visitedData,
      "rating",
      rating,
      "cuisines",
      cuisines,
      "locationtype",
      locationType,
      "waitingtime",
      waitingTime,
      "dishes",
      dishes
    );
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
            data={[
              // More users...
              { value: 1, label: "Korean" },
              { value: 2, label: "Lebanese" },
              { value: 3, label: "Fried Chicken" },
              { value: 4, label: "Dim Sum" },
            ]}
          />
          <InputWithFixed
            onInput={handleLocationTypeInput}
            title="Location Type"
            data={[
              { value: "restaurant", label: "Restaurant" },
              { value: "takeaway", label: "Takeaway" },
              { value: "bar", label: "Bar" },
              { value: "cafe", label: "Cafe" },
              { value: "pub", label: "Pub" },
            ]}
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
            data={[
              { value: "chicken", label: "Chicken" },
              { value: "duck", label: "Duck" },
            ]}
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
      {locationType && <p>{locationType[0]?.label}</p>}
      {locationType && <p>{locationType[1]?.label}</p>}
      {locationType && <p>{locationType[2]?.label}</p>}
      {waitingTime && <p>{waitingTime}</p>}
    </form>
  );
}
