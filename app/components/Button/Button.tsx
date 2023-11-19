import React from "react";
import classNames from "classnames";

export default function Button({
  text,
  type,
  size = "sm",
  rounded = true,
  variant = "primary",
}) {
  const buttonClass = classNames(
    {
      // Primary button styles
      "bg-indigo-600 text-white hover:bg-indigo-500": variant === "primary",
      // Secondary button styles
      "bg-indigo-50 text-indigo-600 hover:bg-indigo-100":
        variant === "secondary",
    },
    "font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
    {
      "px-2 py-1 text-xs": size === "xs",
      "px-2 py-1 text-sm": size === "sm",
      "px-2.5 py-1.5 text-sm": size === "md",
      "px-3 py-2 text-sm": size === "lg",
      "px-3.5 py-2.5 text-sm": size === "xl",
      rounded: rounded,
      "rounded-md": !rounded,
    }
  );

  return (
    <button type={type} className={buttonClass}>
      {text}
    </button>
  );
}
