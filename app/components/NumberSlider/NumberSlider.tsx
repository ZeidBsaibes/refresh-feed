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
      <div className="flex items-center justify-center p-4">
        <input
          type="range"
          min="0"
          max="10"
          value={value}
          onChange={handleChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div>
    </>
  );
};

export default NumberSlider;
