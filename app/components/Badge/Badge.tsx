// BadgeComponent.jsx
export default function Badge({ colour, text }) {
  // Define a mapping of color names to their corresponding Tailwind CSS classes
  const colorClasses = {
    gray: "bg-gray-100 text-gray-600",
    red: "bg-red-100 text-red-700",
    yellow: "bg-yellow-100 text-yellow-800",
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
    indigo: "bg-indigo-100 text-indigo-700",
    purple: "bg-purple-100 text-purple-700",
    pink: "bg-pink-100 text-pink-700",
  };

  // Get the specific classes for the provided color
  const classes = colorClasses[colour] || colorClasses.gray; // Default to gray if color is not found

  return (
    <span
      className={`inline-flex items-center rounded-md mx-1 px-1.5 py-0.5 text-xs font-medium ${classes}`}
    >
      {text}
    </span>
  );
}
