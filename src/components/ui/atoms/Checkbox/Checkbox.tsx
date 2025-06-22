import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import type { CheckboxProps } from "./Checkbox.types";
import styles from "./themes/CheckboxLight.module.css";

/**
 * Checkbox – Atom với a11y, hỗ trợ indeterminate, variant, theme.
 */
export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  indeterminate = false,
  disabled = false,
  onChange,
  className,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Xử lý indeterminate state
  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = !!indeterminate;
  }, [indeterminate]);

  return (
    <label
      className={clsx(
        "inline-flex items-center gap-2 cursor-pointer select-none",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <input
        ref={inputRef}
        type="checkbox"
        className={clsx(
          "w-5 h-5 rounded-md focus:ring-2 focus:ring-accent",
          styles.checkbox,
          indeterminate && styles.indeterminate
        )}
        checked={checked}
        disabled={disabled}
        aria-checked={indeterminate ? "mixed" : checked}
        onChange={onChange}
        {...rest}
      />
      <span className="text-sm">{label}</span>
    </label>
  );
};

export default Checkbox;
