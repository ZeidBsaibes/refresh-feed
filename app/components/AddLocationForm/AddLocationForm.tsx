"use client";

import { useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import LocationInput from "../FormComponents/LocationInput/LocationInput";
import DropdownSelect from "../FormComponents/DropdownSelect/DropdownSelect";
import GoogleMapsAutoComplete from "../GoogleMapsAutoComplete/GoogleMapsAutoComplete";
import Toggle from "../Toggle/Toggle";
import RadioGroup from "../RadioGroup/RadioGroup";
import NumberSlider from "../NumberSlider/NumberSlider";
import InputWithIcon from "../InputWithIcon/InputWithIcon";
import InputWithCreate from "../InputWithCreate/InputWithCreate";
import InputWithFixed from "../InputWithFixed/InputWithFixed";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AddLocationForm() {
  const [visited, setVisited] = useState(true);

  return (
    <form>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <GoogleMapsAutoComplete
            apiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}`}
          />
          <RadioGroup title="" subtitle="have you been here before" />
          <NumberSlider />
          <DropdownSelect
            label={"Cuisine"}
            placeholder={"Start typing cuisine, e.g. Dim Sum"}
            options={[
              // More users...
              { id: 1, name: "Korean" },
              { id: 2, name: "Lebanese" },
              { id: 3, name: "Fried Chicken" },
              { id: 4, name: "Dim Sum" },
            ]}
          />
          Cuisine
          <InputWithFixed
            data={[
              // More users...
              { value: 1, label: "Korean" },
              { value: 2, label: "Lebanese" },
              { value: 3, label: "Fried Chicken" },
              { value: 4, label: "Dim Sum" },
            ]}
          />
          Location Type
          <InputWithFixed
            data={[
              { value: "restaurant", label: "Restaurant" },
              { value: "takeaway", label: "Takeaway" },
              { value: "bar", label: "Bar" },
              { value: "cafe", label: "Cafe" },
              { value: "pub", label: "Pub" },
            ]}
          />
          <DropdownSelect
            label={"Location Type"}
            placeholder={"Select Location Type(s)"}
            options={[
              // More users...
              { id: 1, name: "Restaurant" },
              { id: 1, name: "Takeaway" },
              { id: 2, name: "Bar" },
              { id: 3, name: "Cafe" },
              { id: 4, name: "Pub" },
            ]}
          />
          <InputWithIcon />
          <InputWithCreate
            data={[
              { value: "chicken", label: "Chicken" },
              { value: "duck", label: "Duck" },
            ]}
          />
        </div>
      </div>
    </form>
  );
}
