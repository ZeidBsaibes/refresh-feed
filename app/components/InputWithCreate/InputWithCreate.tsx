import CreatableSelect from "react-select/creatable";
import { useState } from "react";

export default function InputWithCreate({ data }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (options) => {
    setSelectedOptions(options || []);
    console.log(options);
  };

  return (
    <>
      <CreatableSelect
        isMulti
        onChange={handleChange}
        value={selectedOptions}
        options={data}
      />
    </>
  );
}
