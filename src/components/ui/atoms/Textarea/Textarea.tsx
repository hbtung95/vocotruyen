import React from "react";
import clsx from "clsx";
import type { TextareaProps } from "./Textarea.types";
import styles from "./themes/TextareaLight.module.css";

/**
 * Textarea – Atom nhập nhiều dòng, label, error, theme, a11y.
 */
export const Textarea: React.FC<TextareaProps> = ({
  label,
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
          sm: "min-h-[60px] px-2 py-1 text-sm",
          md: "min-h-[80px] px-3 py-2 text-base",
          lg: "min-h-[120px] px-4 py-3 text-lg",
        }[size] || "min-h-[80px] px-3 py-2 text-base";

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="font-medium text-gray-700 dark:text-gray-200 mb-0.5">
          {label}
        </label>
      )}
      <textarea
        className={clsx(
          "w-full rounded-xl bg-white/40 dark:bg-gray-900/40 backdrop-blur border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent transition resize-y",
          sizeClass,
          error && "border-red-400 ring-1 ring-red-300",
          disabled && "opacity-60 pointer-events-none",
          styles.textarea,
          className
        )}
        disabled={disabled}
        aria-invalid={!!error}
        {...rest}
      />
      {error && (
        <span className="text-xs text-red-500 font-medium mt-0.5">{error}</span>
      )}
    </div>
  );
};

export default Textarea;
