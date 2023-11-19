import { useState, useEffect } from "react";

export default function FreeTextInput({ label, placeholder, onInput, title }) {
  const [notes, setNotes] = useState(null);

  const handleChange = (notes) => {
    setNotes(notes);
  };

  useEffect(() => {
    onInput(notes);
  }, [notes, onInput]);

  return (
    <div>
      <label
        htmlFor="comment"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {title}
      </label>
      <div className="mt-2">
        <textarea
          onChange={(event) => handleChange(event.target.value)}
          rows={4}
          placeholder={placeholder}
          name="comment"
          id="comment"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue={""}
        />
      </div>
    </div>
  );
}
