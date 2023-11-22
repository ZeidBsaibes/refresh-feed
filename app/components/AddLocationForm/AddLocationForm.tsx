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
  const [visitedData, setVisitedData] = useState(null);
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

    const inputtedData = {
      userId: session?.user.userId,
      placeName: locationData?.placeName,
      googleId: locationData?.googleId,
      lat: locationData?.lat,
      lng: locationData?.lng,
      city: locationData?.city,
      country: locationData?.country,
      // visitedData make tis return a boolean
      rating,
      waitingTime,
      cuisines,
      locationTypes,
      photos: locationData?.photos,
      notes,
      dishes,
    };

    if (validateLocation(inputtedData)) {
      setErrors(validateLocation(inputtedData));
      console.log(errors);
      return;
    } else {
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
    // <form onSubmit={handleFormSubmit}>
    //   <div className="mt-6 flex items-center justify-end gap-x-6">
    //     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    //       <GoogleMapsAutoComplete
    //         apiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}`}
    //         onInput={(locationObject) => {
    //           handleLocationInput(locationObject);
    //         }}
    //       />
    //       <RadioGroup
    //         title=""
    //         subtitle="have you been here before"
    //         onInput={handleVistedInput}
    //       />
    //       <NumberSlider onInput={handleRatingInput} />
    //       <InputWithFixed
    //         onInput={handleCuisineInput}
    //         title="Cuisine"
    //         data={availableCuisines}
    //       />
    //       <InputWithFixed
    //         onInput={handleLocationTypeInput}
    //         title="Location Type"
    //         data={availableLocationTypes}
    //       />
    //       <InputWithIcon
    //         title="Waiting Time"
    //         placeholder="Waiting Time"
    //         icon={"\u231B"}
    //         onInput={handleWaitingTimeInput}
    //       />
    //       Favourite Dishes
    //       <InputWithCreate
    //         placeholder="Add menu items you'd recommend"
    //         title="Dishes/Drinks you'd recommend"
    //         onInput={handleDishesInput}
    //         data={dishesAutocomplete && dishesAutocomplete}
    //       />
    //       <FreeTextInput
    //         label=""
    //         title="Notes"
    //         placeholder="Add anything you want to mention"
    //         onInput={handleNotesInput}
    //       />
    //     </div>
    //   </div>
    //   <Button text="Add Place" type="submit" size="lg" variant="primary" />
    //   <Button text="Cancel" type="button" size="lg" variant="seconary" />
    //   {locationData && <p>{locationData.placeName}</p>}
    //   {locationData && <p>{locationData.city}</p>}
    //   {visitedData && <p> {visitedData.title}</p>}
    //   {rating && <p>{rating}</p>}
    //   {cuisines && <p>{cuisines[0]?.label}</p>}
    //   {cuisines && <p>{cuisines[1]?.label}</p>}
    //   {cuisines && <p>{cuisines[2]?.label}</p>}
    //   {cuisines && <p>{cuisines[3]?.label}</p>}
    //   {locationTypes && <p>{locationTypes[0]?.label}</p>}
    //   {locationTypes && <p>{locationTypes[1]?.label}</p>}
    //   {locationTypes && <p>{locationTypes[2]?.label}</p>}
    //   {waitingTime && <p>{waitingTime}</p>}
    // </form>

    <form onSubmit={handleFormSubmit} className="bg-white px-8 py-8 ">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Profile
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
                Search for a Location
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

            {/* <div className="col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon
                  className="h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div> */}

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
            <div className="col-span-full">
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
            </div>
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
        <Button text="Cancel" type="button" size="lg" variant="seconary" />
        <Button text="Add Place" type="submit" size="lg" variant="primary" />
      </div>
      <Modal show={isModalOpen} data={locationData} handleOpen={handleModal} />
    </form>
  );
}
