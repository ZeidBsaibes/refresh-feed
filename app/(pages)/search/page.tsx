"use client";
import { useSearchParams } from "next/navigation";
import handleSearch from "@/scripts/utils/handleSearch";
import { useEffect, useState } from "react";
import LocationCardHoriz from "@/app/components/LocationCardHoriz/LocationCardHoriz";
import LocationsMap from "@/app/components/LocationsMap/LocationsMap";
import LottieLoader from "@/app/components/LottieLoader/LottieLoader";
import loading from "../../../lib/lottie/magnifying-glass-orange.json";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [searchResults, setSearchResults] = useState(null);
  const [showLoader, setShowLoader] = useState(true);

  const search = searchParams.get("search");

  const getAndSetSearchResults = async () => {
    const results = await handleSearch(search);
    setSearchResults(results);
    console.log(`search results are`, searchResults);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    getAndSetSearchResults();
  }, [search]);

  if (showLoader) {
    return (
      <>
        <LottieLoader animation={loading} />
      </>
    );
  }

  if (searchResults && searchResults.results.length === 0) {
    return (
      <h1 className="mb-2 text-3xl  tracking-tight text-gray-900 dark:text-white">
        Your search: <span className="font-bold">{search}</span> had no results
      </h1>
    );
  }

  if (searchResults) {
    return (
      <>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row ">
            <div className="md:flex-1 p-2 overflow-auto h-[100vh]">
              <h1 className="mb-2 text-3xl  tracking-tight text-gray-900 dark:text-white">
                Showing results for: <span className="font-bold">{search}</span>
              </h1>

              <section>
                {searchResults.results.map((result) => {
                  return (
                    <LocationCardHoriz
                      key={result.id}
                      data={result}
                      page={search}
                    />
                  );
                })}
              </section>
            </div>
            <div className="md:flex-1 p-2 overflow-auto h-[100vh]">
              <section>
                <div className="md:flex-1 p-2 h-[100vh]">
                  <LocationsMap data={searchResults.results} />
                </div>
              </section>
            </div>
          </div>
        </div>
      </>
    );
  }
}
