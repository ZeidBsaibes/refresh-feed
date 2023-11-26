"use client";
import { useSearchParams } from "next/navigation";
import handleSearch from "@/scripts/utils/handleSearch";
import { useEffect, useState } from "react";
import LocationCardHoriz from "@/app/components/LocationCardHoriz/LocationCardHoriz";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [searchResults, setSearchResults] = useState(null);

  const search = searchParams.get("search");

  const getAndSetSearchResults = async () => {
    const results = await handleSearch(search);
    setSearchResults(results);
    console.log(`search results are`, searchResults);
  };

  useEffect(() => {
    getAndSetSearchResults();
  }, [search]);

  if (searchResults) {
    return (
      <h1 className="mb-2 text-3xl  tracking-tight text-gray-900 dark:text-white">
        Your Search: <span className="font-bold">{search}</span> had no results
        <h2>THIS PAGE IS NOT YET WORKING</h2>
        <h3>search bar and search query to backend are workings</h3>
      </h1>
    );
  }
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row ">
          <div className="md:flex-1 p-2 overflow-auto h-[100vh]">
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              You Searched for {search}
            </h1>
            <h2>THIS PAGE IS NOT YET WORKING</h2>
            <section>
              {/* {searchResults.map((result) => {
                return <LocationCardHoriz key={result.id} data={location} />;
              })} */}
            </section>
          </div>
          <div className="md:flex-1 p-2 overflow-auto h-[100vh]">
            <section>
              <div className="md:flex-1 p-2 h-[100vh]">
                {/* <LocationsMap data={searchResults.SavedLocation} /> */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
