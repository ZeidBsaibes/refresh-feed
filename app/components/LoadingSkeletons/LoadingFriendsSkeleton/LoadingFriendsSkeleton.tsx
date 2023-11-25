export default function LoadingFriendsSkeleton({ count }) {
  return (
    <div className="bg-white dark:bg-black py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="text-3xl font-bold tracking-tight text-gray-300 dark:text-white sm:text-4xl h-6 w-3/4">
            Your Friends
          </div>
        </div>
        <ul
          role="list"
          className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {[...Array(count)].map(
            (
              _,
              index // Assuming 6 placeholders
            ) => (
              <li key={index} className="animate-pulse">
                <div className="mx-auto h-24 w-24 bg-gray-200 rounded-full">
                  {/* Skeleton for Image */}
                </div>
                <div className="mt-6 h-4 w-3/4 bg-gray-200 rounded-md">
                  {/* Skeleton for Name */}
                </div>
                <div className="mt-2 h-4 w-1/2 bg-gray-200 rounded-md">
                  {/* Skeleton for Location Count */}
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
