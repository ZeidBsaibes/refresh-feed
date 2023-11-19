import Select from "react-select";

export default function InputWithFixed({ data }) {
  return (
    <>
      <Select
        isMulti
        name="colors"
        options={data}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </>
  );
}
