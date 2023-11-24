"use client";

import { useState, useEffect } from "react";

const NumberSlider = ({ onInput }) => {
  // State for the slider value
  const [value, setValue] = useState(5);

  // Handle change event
  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };

  useEffect(() => {
    onInput(value);
  }, [value, onInput]);

  return (
    <>
      {/* <div className="flex items-center justify-center p-4">
        <input
          type="range"
          min="0"
          max="10"
          value={value}
          onChange={handleChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div> */}

      <div className="relative mb-8 w-full md:w-1/2">
        <label htmlFor="labels-range-input" className="sr-only">
          Labels range
        </label>
        <input
          id="large-range"
          type="range"
          value={value}
          onChange={handleChange}
          min="0"
          step="0.1"
          max="10"
          className="w-full h-6 bg-gray-200 rounded-xl ppearance-none cursor-pointer range-xl dark:bg-gray-700"
        />
        <span className=" text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
          Terrible (0)
        </span>
        <span className="text-sm text-gray-900 font-medium dark:text-gray-400 absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
          {value}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6"></span>
        <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
          Incredible (10)
        </span>
      </div>
    </>
  );
};

export default NumberSlider;
