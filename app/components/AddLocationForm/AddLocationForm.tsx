"use client";

import { useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import SimpleInput from "../FormComponents/SimpleInput/LocationInput";
import DropdownSelect from "../FormComponents/DropdownSelect/DropdownSelect";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AddLocationForm() {
  const [visited, setVisited] = useState(true);

  return (
    <form>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleInput
            label="Location"
            placeholder="Start by entering a location name"
          />
          <DropdownSelect />
        </div>
      </div>
    </form>
  );
}
