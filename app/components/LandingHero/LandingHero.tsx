import TestMap from "../TestMap/TestMap";
import { Dialog } from "@headlessui/react";
import LocationsMap from "../LocationsMap/LocationsMap";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function LandingHero() {
  return (
    // <div className="relative bg-white">
    //   <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
    //     <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
    //       <div className="mx-auto max-w-2xl lg:mx-0">
    //         <img
    //           className="h-11"
    //           src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
    //           alt="Your Company"
    //         />
    //         <div className="hidden sm:mt-32 sm:flex lg:mt-16">
    //           <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
    //             Friends helping friends find better food and drink.{" "}
    //             <a
    //               href="/about"
    //               className="whitespace-nowrap font-semibold text-indigo-600"
    //             >
    //               <span className="absolute inset-0" aria-hidden="true" />
    //               About Us <span aria-hidden="true">&rarr;</span>
    //             </a>
    //           </div>
    //         </div>
    //         <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
    //           Find out where your friends are eating{" "}
    //         </h1>
    //         <p className="mt-6 text-lg leading-8 text-gray-600">
    //           Food and drink recommendations from friends. Forget search
    //           engines, social media and food critics, go to the places tried and
    //           tested by people you actually trust.
    //         </p>
    //         <div className="mt-10 flex items-center gap-x-6">
    //           <a
    //             href="/api/auth/signin"
    //             className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //           >
    //             Get started
    //           </a>
    //           {/* <a
    //             href="#"
    //             className="text-sm font-semibold leading-6 text-gray-900"
    //           >
    //             Learn more <span aria-hidden="true">→</span>
    //           </a> */}
    //         </div>
    //       </div>
    //     </div>
    //     <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
    //       {/* <img
    //         className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
    //         src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
    //         alt=""
    //       /> */}

    //       {/* <TestMap /> */}
    //       <LocationsMap />
    //     </div>
    //   </div>
    // </div>

    <div className="bg-white">
      <div className="relative isolate pt-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        ></div>
        <div className="py-8 sm:py-8 lg:pb-0">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                <span className="underline decoration-solid decoration-indigo-600">
                  Trusted
                </span>{" "}
                food and drink spots from{" "}
                <span className="underline decoration-wavy decoration-indigo-600">
                  your friends
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Food and drink recommendations from friends. Forget search
                engines, social media and food critics, go to the places tried
                and tested by people you actually trust.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/api/auth/signin"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a
                  href="/about"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative isolate">
        <div className="py-8 sm:py-8 lg:pb-0">
          <div className="mapbox__container">
            <LocationsMap />
          </div>
        </div>
      </div>
    </div>
  );
}
