export default function LoadingGallerySkeleton() {
  return (
    <>
      {/* Loading Skeleton for the Modal */}
      <div className="fixed inset-0 bg-gray-300 opacity-75"></div>

      {/* Loading Skeleton for the Image Thumbnails */}
      <div className="flex overflow-x-auto space-x-4 p-4">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="w-60 h-60 bg-gray-300 rounded-lg"></div>
        ))}
      </div>
    </>
  );
}
