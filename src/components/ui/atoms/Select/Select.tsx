import React from "react";
import clsx from "clsx";
import type { SelectProps } from "./Select.types";
import styles from "./themes/SelectLight.module.css";
import { Icon } from "../../Icon";

/**
 * Select – Atom dropdown cơ bản, a11y, error, theme, option icon.
 */
export const Select: React.FC<SelectProps> = ({
  options,
  value,
  label,
  placeholder = "Chọn...",
  withIcon = false,
  error,
  disabled = false,
  size = "md",
  className,
  ...rest
}) => {
  const sizeClass = {
    sm: "h-8 px-2 text-sm",
    md: "h-10 px-3 text-base",
    lg: "h-12 px-4 text-lg",
  }[size] || "h-10 px-3 text-base";

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-medium text-gray-700 dark:text-gray-200 mb-0.5">{label}</label>}
      <div className={clsx(
        "relative w-full rounded-xl bg-white/40 dark:bg-gray-900/40 backdrop-blur border border-gray-300 dark:border-gray-700 transition",
        sizeClass,
        error && "border-red-400 ring-1 ring-red-300",
        disabled && "opacity-60 pointer-events-none",
        styles.select,
        className
      )}>
        <select
          className={clsx(
            "appearance-none w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-accent transition rounded-xl pr-8",
            "placeholder-gray-400 dark:placeholder-gray-500"
          )}
          disabled={disabled}
          value={value}
          aria-invalid={!!error}
          {...rest}
        >
          {placeholder && <option value="" disabled hidden>{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {/* Chevron icon phải */}
        <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
          <Icon name="chevronDown" size={18} />
        </span>
      </div>
      {error && (
        <span className="text-xs text-red-500 font-medium mt-0.5">{error}</span>
      )}
    </div>
  );
};

export default Select;
