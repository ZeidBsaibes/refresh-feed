"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { signIn, signOut } from "next-auth/react";
import Button from "../Button/Button";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { data: session } = useSession();
  console.log(`session from nav`, session);

  let navigation = [];

  if (session) {
    navigation = [
      { name: "Friends", href: "#" },
      {
        name: "My Locations",
        // @ts-ignore
        href: `/user/${session?.user?.userId}/locations`,
      },
      { name: "Add A Location", href: "/add-location" },
      { name: "About", href: "/about", current: true },
    ];
  } else {
    navigation = [{ name: "About", href: "/about" }];
  }

  return (
    <Disclosure as="nav" className="bg-gray-800 w-full z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0">
                  <a href="/">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />
                  </a>
                </div>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <a
                      //@ts-ignore
                      href={`/user/${session?.user?.userId}/locations`}
                      className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    >
                      My Locations
                    </a>
                    <a
                      href="/wishlist"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Wishlist
                    </a>
                    <a
                      href="/friends"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Friends
                    </a>
                    <a
                      href="/about"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      About
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:block">
                <div className="flex items-center">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-4 flex-shrink-0">
                    <div>
                      {session ? (
                        <Button
                          text="Sign Out"
                          aria-label="Sign out Button"
                          variant="secondary"
                          size="lg"
                          type="button"
                          onClick={() => signOut()}
                        />
                      ) : (
                        <Button
                          variant="primary"
                          aria-label="Sign In Button"
                          text="Sign In"
                          size="lg"
                          type="button"
                          onClick={() => signIn()}
                        />
                      )}
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Disclosure.Button
                as="a"
                aria-label="add Location  link"
                href={`/add-location`}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Add A Location
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                // @ts-ignore
                href={`/user/${session?.user?.userId}/locations`}
                aria-label="See your location link"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                My Locations
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                // @ts-ignore
                href="/wishlist"
                aria-label="see wishlist link"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Wishlist
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                aria-label="see friends link"
                href="/friends"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Friends
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                aria-label="about page link"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                About
              </Disclosure.Button>
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  {session ? (
                    <Button
                      text="Sign Out"
                      variant="secondary"
                      size="lg"
                      type="button"
                      aria-label="sign in button"
                      onClick={() => signOut()}
                    />
                  ) : (
                    <Button
                      variant="primary"
                      text="Sign In"
                      size="lg"
                      type="button"
                      aria-label="sign out button"
                      onClick={() => signIn()}
                    />
                  )}
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">
                    <p>{session ? session?.user?.name : ""}</p>
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    <p>{session ? session?.user?.email : ""}</p>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="notifications button bell icon"
                  className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <button aria-label="notifications button bell icon">
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
//   );
// }
