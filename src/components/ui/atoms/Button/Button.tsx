import React from "react";
import clsx from "clsx";
import type { ButtonProps } from "./Button.types";

/**
 * Button – Atom đa năng với variant, size, icon, loading, shape, fullWidth
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  loading = false,
  disabled = false,
  fullWidth = false,
  shape = "rounded",
  className,
  ...rest
}) => {
  const sizeClass =
    size === "sm"
      ? "px-3 py-1 text-sm"
      : size === "lg"
      ? "px-5 py-3 text-lg"
      : "px-4 py-2 text-base";

  const shapeClass =
    shape === "pill"
      ? "rounded-full"
      : shape === "square"
      ? "rounded-md"
      : "rounded-xl";

  const variantClass = {
    primary: "bg-accent text-white hover:bg-accent/90",
    secondary: "bg-gray-100 text-accent hover:bg-accent/10 border border-accent/20",
    outline: "border border-accent text-accent bg-transparent hover:bg-accent/10",
    ghost: "bg-transparent text-accent hover:bg-accent/5",
    link: "bg-transparent underline text-accent hover:text-accent/80 p-0",
  }[variant];

  return (
    <button
      type="button"
      className={clsx(
        "inline-flex items-center justify-center font-medium transition focus:outline-none focus:ring-2 focus:ring-accent",
        sizeClass,
        shapeClass,
        variantClass,
        fullWidth && "w-full",
        disabled && "opacity-60 cursor-not-allowed pointer-events-none",
        className
      )}
      disabled={disabled || loading}
      aria-busy={loading}
      {...rest}
    >
      {loading && (
        <span className="mr-2">
          {/* Spinner mini */}
          <svg className="animate-spin" width={16} height={16} viewBox="0 0 24 24" fill="none">
            <circle
              className="opacity-20"
              cx="12" cy="12" r="10"
              stroke="currentColor" strokeWidth="4"
            />
            <path
              d="M22 12a10 10 0 0 0-10-10"
              stroke="currentColor" strokeWidth="4"
              strokeLinecap="round"
              className="opacity-80"
            />
          </svg>
        </span>
      )}
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};

export default Button;
