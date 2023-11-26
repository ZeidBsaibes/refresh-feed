"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchInput() {
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.search.value;

    if (searchTerm) {
      router.push(`/search?search=${searchTerm.toString()}`);
    } else {
      return;
    }
  };

  return (
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
          <form onSubmit={handleSearch}>
            <input
              spellCheck={true}
              id="search"
              name="search"
              className="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Search"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
