import React from "react";
import clsx from "clsx";
import type { LabelProps } from "./Label.types";
import styles from "./themes/LabelLight.module.css";

/**
 * Label – Atom mô tả cho input/field, chuẩn a11y, hỗ trợ trạng thái.
 */
export const Label: React.FC<LabelProps> = ({
  children,
  htmlFor,
  required,
  optional,
  disabled = false,
  error = false,
  className,
  ...rest
}) => (
  <label
    htmlFor={htmlFor}
    className={clsx(
      "inline-flex items-center gap-1 text-base font-medium select-none transition",
      disabled && "opacity-60 cursor-not-allowed",
      error && "text-red-500",
      styles.label,
      className
    )}
    aria-disabled={disabled}
    {...rest}
  >
    {children}
    {required && <span className="ml-1 text-red-500">*</span>}
    {optional && !required && (
      <span className="ml-1 text-xs text-gray-400">(tuỳ chọn)</span>
    )}
  </label>
);

export default Label;
