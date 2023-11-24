"use client";

import Select from "react-select";
import { useState, useEffect, useId } from "react";

export default function InputWithFixed({ data, title, onInput }) {
  const [selectedOptions, setSelectedOptions] = useState(null);

  const handleChange = (options) => {
    setSelectedOptions(options);
  };

  useEffect(() => {
    onInput(selectedOptions);
  }, [selectedOptions, onInput]);

  return (
    <>
      {title}
      <Select
        instanceId={useId()}
        isMulti
        onChange={handleChange}
        name="colors"
        options={data}
        className="basic-multi-select text-black"
        classNamePrefix="select"
      />
    </>
  );
}
