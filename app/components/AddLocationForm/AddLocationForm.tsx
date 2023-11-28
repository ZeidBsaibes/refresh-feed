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
import { UserCircleIcon, PhotoIcon } from "@heroicons/react/24/outline";
import Modal from "../Modal/Modal";
import validateLocation from "@/scripts/utils/validateLocation";
import Alert from "../Alert/Alert";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AddLocationForm() {
  const [availableLocationTypes, setAvailableLocationTypes] = useState(null);
  const [availableCuisines, setAvailableCuisines] = useState(null);
  const [dishesAutocomplete, setDishesAutoComplete] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [visited, setVisited] = useState(null);
  const [rating, setRating] = useState(0.5);
  const [cuisines, setCuisines] = useState(null);
  const [locationTypes, setLocationTypes] = useState(null);
  const [waitingTime, setWaitingTime] = useState(null);
  const [dishes, setDishes] = useState(null);
  const [notes, setNotes] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(null);
  const [errors, setErrors] = useState(null);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const { data: session } = useSession();

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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
    setVisited(visitedObject);
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

    const inputtedData = {
      userId: session?.user.userId,
      placeName: locationData?.placeName,
      googleId: locationData?.googleId,
      lat: locationData?.lat,
      lng: locationData?.lng,
      city: locationData?.city,
      country: locationData?.country,
      visited,
      rating,
      waitingTime,
      cuisines,
      locationTypes,
      photos: locationData?.photos,
      notes,
      dishes,
      website: locationData?.website,
    };

    if (validateLocation(inputtedData)) {
      setErrors(validateLocation(inputtedData));

      return;
    } else {
      setSubmitButtonDisabled(true);
      try {
        const response = await postLocation(inputtedData);
        console.log("posted", inputtedData);
        setIsModalOpen(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="bg-white px-8 py-20 h-full overflow-auto"
    >
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Add a location to your saved list
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="locationSearch"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Start typing the name of the establishment
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <GoogleMapsAutoComplete
                    apiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}`}
                    id={"locationSearch"}
                    onInput={(locationObject) => {
                      handleLocationInput(locationObject);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="visted"
                className="block text-sm font-medium leading-6 text-gray-900"
              ></label>
              <div className="mt-2">
                <RadioGroup id="visited" title="" onInput={handleVistedInput} />
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                ></label>
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className=" my-4 block text-sm font-medium leading-6 text-gray-900"
              >
                Your Rating
              </label>
              <NumberSlider onInput={handleRatingInput} />
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className=" my-4 block text-sm font-medium leading-6 text-gray-900"
              >
                Location Type
              </label>
              <InputWithFixed
                onInput={handleLocationTypeInput}
                data={availableLocationTypes}
              />
            </div>
            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className=" my-4 block text-sm font-medium leading-6 text-gray-900"
              >
                Cuisines
              </label>
              <InputWithFixed
                onInput={handleCuisineInput}
                data={availableCuisines}
              />
            </div>
            {/* <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className=" my-4 block text-sm font-medium leading-6 text-gray-900"
              >
                Waiting Time
              </label>
              <InputWithIcon
                placeholder="Waiting Time"
                icon={"\u231B"}
                onInput={handleWaitingTimeInput}
              />
            </div> */}
            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className=" my-4 block text-sm font-medium leading-6 text-gray-900"
              >
                Recommendations
              </label>
              <InputWithCreate
                placeholder="Add or create items you'd recommend"
                onInput={handleDishesInput}
                data={dishesAutocomplete && dishesAutocomplete}
              />
            </div>
            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className=" my-4 block text-sm font-medium leading-6 text-gray-900"
              >
                Notes
              </label>
              <FreeTextInput
                placeholder="Add anything you want to mention"
                onInput={handleNotesInput}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        {errors &&
          errors.map((error) => {
            return <Alert key={error.id} error={error.error} />;
          })}
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Button text="Cancel" type="button" size="lg" variant="secondary" />
        <Button
          text="Add Place"
          type="submit"
          size="lg"
          variant="primary"
          disabled={submitButtonDisabled}
        />
      </div>
      <Modal show={isModalOpen} data={locationData} handleOpen={handleModal} />
    </form>
  );
}
