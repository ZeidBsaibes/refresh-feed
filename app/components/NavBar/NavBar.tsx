"use client";
import React from "react";

import { useSession } from "next-auth/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// export default function NavBar() {
//   const { data: session } = useSession();
//   console.log(session);
//   console.log(process.env.NEXT_PUBLIC_BASE_URL);

//   const navigation = [
//     { name: "Home", href: "/", current: false },
//     {
//       name: "My Locations",
//       // @ts-ignore
//       href: session && `/user/${session?.user?.userId}/locations`,
//       current: true,
//     },
//     { name: "Friends", href: "#", current: false },
//     { name: "Add Location", href: "/add-location", current: false },
//     { name: "Locations", href: "/locations", current: false },
//   ];

//   const userNavigation = [
//     { name: "Your Profile", href: "#" },
//     { name: "Settings", href: "#" },
//     {
//       name: session ? "Sign out" : "Sign-in",
//       href: session ? "/api/auth/signout" : "/api/auth/signin",
//     },
//   ];

//   const user = {
//     name: session ? session.user.name : "Sign up",
//     email: session ? session.user.email : "See what your friends are eating",
//     imageUrl: session
//       ? session.user.image
//       : "https://avatar.iran.liara.run/public",
//   };

//   return (
//     <Disclosure as="header" className="bg-gray-800">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
//             <div className="relative flex h-16 justify-between">
//               <div className="relative z-10 flex px-2 lg:px-0">
//                 <div className="flex flex-shrink-0 items-center">
//                   {/* todo ADD Logo */}
//                   <img
//                     className="h-8 w-auto"
//                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                     alt="Your Company"
//                   />
//                 </div>
//               </div>
//               <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
//                 <div className="w-full sm:max-w-xs">
//                   <label htmlFor="search" className="sr-only">
//                     Search
//                   </label>
//                   <div className="relative">
//                     <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                       <MagnifyingGlassIcon
//                         className="h-5 w-5 text-gray-400"
//                         aria-hidden="true"
//                       />
//                     </div>
//                     <input
//                       id="search"
//                       name="search"
//                       className="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"
//                       placeholder="Search"
//                       type="search"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="relative z-10 flex items-center lg:hidden">
//                 {/* Mobile menu button */}
//                 <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="absolute -inset-0.5" />
//                   <span className="sr-only">Open menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
//                 <p>{session?.user.name}</p>
//                 <button
//                   type="button"
//                   className="relative flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                 >
//                   <span className="absolute -inset-1.5" />
//                   <span className="sr-only">View notifications</span>
//                   <BellIcon className="h-6 w-6" aria-hidden="true" />
//                 </button>

//                 {/* Profile dropdown */}
//                 <Menu as="div" className="relative ml-4 flex-shrink-0">
//                   <div>
//                     <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                       <span className="absolute -inset-1.5" />
//                       <span className="sr-only">Open user menu</span>
//                       <img
//                         className="h-8 w-8 rounded-full"
//                         src={user.imageUrl}
//                         alt=""
//                       />
//                     </Menu.Button>
//                   </div>
//                   <Transition
//                     as={Fragment}
//                     enter="transition ease-out duration-100"
//                     enterFrom="transform opacity-0 scale-95"
//                     enterTo="transform opacity-100 scale-100"
//                     leave="transition ease-in duration-75"
//                     leaveFrom="transform opacity-100 scale-100"
//                     leaveTo="transform opacity-0 scale-95"
//                   >
//                     <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                       {userNavigation.map((item) => (
//                         <Menu.Item key={item.name}>
//                           {({ active }) => (
//                             <a
//                               href={item.href}
//                               className={classNames(
//                                 active ? "bg-gray-100" : "",
//                                 "block px-4 py-2 text-sm text-gray-700"
//                               )}
//                             >
//                               {item.name}
//                             </a>
//                           )}
//                         </Menu.Item>
//                       ))}
//                     </Menu.Items>
//                   </Transition>
//                 </Menu>
//               </div>
//             </div>
//             <nav
//               className="hidden lg:flex lg:space-x-8 lg:py-2 lg:justify-end"
//               aria-label="Global"
//             >
//               {navigation.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className={classNames(
//                     item.current
//                       ? "bg-gray-900 text-white"
//                       : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                     "inline-flex items-center rounded-md py-2 px-3 text-sm font-medium"
//                   )}
//                   aria-current={item.current ? "page" : undefined}
//                 >
//                   {item.name}
//                 </a>
//               ))}
//             </nav>
//           </div>

//           <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
//             <div className="space-y-1 px-2 pb-3 pt-2">
//               {navigation.map((item) => (
//                 <Disclosure.Button
//                   key={item.name}
//                   as="a"
//                   href={item.href}
//                   className={classNames(
//                     item.current
//                       ? "bg-gray-900 text-white"
//                       : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                     "block rounded-md py-2 px-3 text-base font-medium"
//                   )}
//                   aria-current={item.current ? "page" : undefined}
//                 >
//                   {item.name}
//                 </Disclosure.Button>
//               ))}
//             </div>
//             <div className="border-t border-gray-700 pb-3 pt-4">
//               <div className="flex items-center px-4">
//                 <div className="flex-shrink-0">
//                   <img
//                     className="h-10 w-10 rounded-full"
//                     src={user.imageUrl}
//                     alt=""
//                   />
//                 </div>
//                 <div className="ml-3">
//                   <div className="text-base font-medium text-white">
//                     {user.name}
//                   </div>
//                   <div className="text-sm font-medium text-gray-400">
//                     {user.email}
//                   </div>
//                 </div>
//                 <button
//                   type="button"
//                   className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                 >
//                   <span className="absolute -inset-1.5" />
//                   <span className="sr-only">View notifications</span>
//                   <BellIcon className="h-6 w-6" aria-hidden="true" />
//                 </button>
//               </div>
//               <div className="mt-3 space-y-1 px-2">
//                 {userNavigation.map((item) => (
//                   <Disclosure.Button
//                     key={item.name}
//                     as="a"
//                     href={item.href}
//                     className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
//                   >
//                     {item.name}
//                   </Disclosure.Button>
//                 ))}
//               </div>
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Friends", href: "#" },
  { name: "Your Locations", href: "#" },
  { name: "Add Locations", href: "#" },
  { name: "About", href: "#" },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { data: session } = useSession();
  console.log(session);

  return (
    <header className="bg-gray-900">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
