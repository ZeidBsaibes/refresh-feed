import { MapPinIcon } from "@heroicons/react/24/outline";

export default function EmptyStateList() {
  return (
    <div className="text-center">
      <MapPinIcon
        height={"30"}
        className="mx-auto h-12 w-12 text-gray-400  dark:text-white"
      />
      <h3 className="mt-2 text-sm font-semibold text-gray-900 dark:text-white">
        No locations
      </h3>
      <p className="mt-1 text-sm text-gray-500 dark:text-white">
        Get started by creating a new locations.
      </p>
      <div className="mt-6">
        <a href="/add-location">
          <div className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <MapPinIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            New Project
          </div>
        </a>
      </div>
    </div>
  );
}
