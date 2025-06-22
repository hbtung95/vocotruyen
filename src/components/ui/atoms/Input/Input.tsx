import React from "react";
import clsx from "clsx";
import type { InputProps } from "./Input.types";
import styles from "./themes/InputLight.module.css";

/**
 * Input atom – field 1 dòng, hỗ trợ icon, error, theme, a11y.
 */
export const Input: React.FC<InputProps> = ({
  label,
  leftIcon,
  rightIcon,
  error,
  disabled = false,
  size = "md",
  className,
  ...rest
}) => {
  const sizeClass =
    typeof size === "number"
      ? undefined
      : {
          sm: "h-8 px-2 text-sm",
          md: "h-10 px-3 text-base",
          lg: "h-12 px-4 text-lg",
        }[size] || "h-10 px-3 text-base";

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="font-medium text-gray-700 dark:text-gray-200 mb-0.5">
          {label}
        </label>
      )}
      <div
        className={clsx(
          "relative flex items-center rounded-xl bg-white/40 dark:bg-gray-900/40 backdrop-blur border border-gray-300 dark:border-gray-700 transition",
          sizeClass,
          error && "border-red-400 ring-1 ring-red-300",
          disabled && "opacity-60 pointer-events-none",
          styles.input,
          className
        )}
      >
        {leftIcon && (
          <span className="absolute left-2 text-gray-400 pointer-events-none">
            {leftIcon}
          </span>
        )}
        <input
          className={clsx(
            "w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-accent transition rounded-xl",
            leftIcon && "pl-7",
            rightIcon && "pr-7",
            "placeholder-gray-400 dark:placeholder-gray-500"
          )}
          disabled={disabled}
          aria-invalid={!!error}
          {...rest}
        />
        {rightIcon && (
          <span className="absolute right-2 text-gray-400 cursor-pointer">
            {rightIcon}
          </span>
        )}
      </div>
      {error && (
        <span className="text-xs text-red-500 font-medium mt-0.5">{error}</span>
      )}
    </div>
  );
};

export default Input;
