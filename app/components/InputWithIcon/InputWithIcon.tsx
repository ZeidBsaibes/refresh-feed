"use client";

import { ClockIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";

export default function InputWithIcon({ title, onInput, placeholder, icon }) {
  const [fieldValue, setFieldValue] = useState(null);

  const handleChange = (value) => {
    console.log(value);
    setFieldValue(Number(value));
  };

  useEffect(() => {
    onInput(fieldValue);
  }, [fieldValue, onInput]);

  return (
    <div>
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900"
      ></label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">{icon}</span>
        </div>
        <input
          type="tel"
          inputMode="decimal"
          name="number_input"
          onChange={(event) => {
            handleChange(event.target.value);
          }}
          id="number_input"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
          aria-describedby="icon and unit"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <span className="text-gray-500 sm:text-sm" id="price-currency">
            Minutes
          </span>
        </div>
      </div>
    </div>
  );
}
