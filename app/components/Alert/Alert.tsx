export default function Alert({ error }) {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-1 my-2 rounded relative"
      role="alert"
    >
      <span className="block sm:inline">{error}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
    </div>
  );
}
