"use client";

import CreatableSelect from "react-select/creatable";
import { useState, useEffect, useId } from "react";

export default function InputWithCreate({ data, title, onInput, placeholder }) {
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
      <CreatableSelect
        instanceId={useId()}
        isMulti
        onChange={handleChange}
        value={selectedOptions}
        options={data}
        placeholder={placeholder}
      />
    </>
  );
}
