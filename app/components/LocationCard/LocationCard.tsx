import {
  UserCircleIcon,
  CalendarDaysIcon,
  CreditCardIcon,
} from "@heroicons/react/20/solid";

const moment = require("moment");
const capitalize = require("capitalize");

export default function LocationCard({ data }) {
  const {
    city,
    country,
    createdAt,
    placeName,
    cuisines,
    LocationLocationType,
    dishes,
  } = data;
  return (
    <>
      <div className="lg:col-start-3 lg:row-end-1">
        <h2 className="sr-only">Summary</h2>
        <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
          <dl className="flex flex-wrap">
            <div className="flex-auto pl-6 pt-6">
              <dt className="text-sm font-semibold leading-6 text-gray-900">
                {city}
              </dt>
              <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">
                {placeName}
              </dd>
            </div>
            <div className="flex-none self-end px-6 pt-4">
              <dt className="sr-only">Status</dt>
              {cuisines.map((cuisine) => {
                return (
                  <dd
                    key={cuisine.locationId}
                    className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20"
                  >
                    {cuisine.cuisine.label}
                  </dd>
                );
              })}
            </div>
            <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
              <dt className="flex-none">
                <span className="sr-only">Client</span>
                <UserCircleIcon
                  className="h-6 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </dt>

              {LocationLocationType.map((locationType) => {
                return (
                  <dd
                    key={locationType.locationId}
                    className="text-sm font-medium leading-6 text-gray-900"
                  >
                    {locationType.locationType.label}
                  </dd>
                );
              })}
            </div>
            <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
              <dt className="flex-none">
                <span className="sr-only">Due date</span>
                <CalendarDaysIcon
                  className="h-6 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd className="text-sm leading-6 text-gray-500">
                <time dateTime="2023-01-31">{`Added: ${moment(
                  createdAt
                ).fromNow()}`}</time>
              </dd>
            </div>
            <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
              <dt className="flex-none">
                <span className="sr-only">Status</span>
                <CreditCardIcon
                  className="h-6 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              {dishes.map((dish) => {
                return (
                  <dd
                    key={dish.dishId}
                    className="text-sm leading-6 text-gray-500"
                  >
                    {capitalize.words(dish.dish.label)}
                  </dd>
                );
              })}
            </div>
          </dl>
          <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Download receipt <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
