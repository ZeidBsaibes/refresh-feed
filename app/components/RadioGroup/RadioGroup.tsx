const options = [
  { id: "visited", title: "I've been here" },
  { id: "wishlist", title: "I want to go here" },
];

export default function RadioGroup({ title, subtitle }) {
  return (
    <div>
      <label className="text-base font-semibold text-gray-900">{title}</label>
      <p className="text-sm text-gray-500">{subtitle}</p>
      <fieldset className="mt-4">
        <legend className="sr-only">Notification method</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          {options.map((option) => (
            <div key={option.id} className="flex items-center">
              <input
                id={option.id}
                name="notification-method"
                type="radio"
                defaultChecked={option.id === "email"}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor={option.id}
                className="ml-3 block text-sm font-medium leading-6 text-gray-900"
              >
                {option.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
