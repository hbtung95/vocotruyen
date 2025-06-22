import React from "react";
import clsx from "clsx";
import type { SpinnerProps } from "./Spinner.types";
import styles from "./themes/SpinnerLight.module.css";

/**
 * Spinner – Atom loading chuẩn, theme, a11y, variant.
 */
export const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  color = "#2563eb",
  label = "Đang tải...",
  hideLabel = false,
  className,
  ...rest
}) => {
  const px =
    size === "sm" ? 18 : size === "md" ? 28 : size === "lg" ? 40 : size || 28;
  return (
    <div className={clsx("flex flex-col items-center gap-1", className)} {...rest}>
      <svg
        width={px}
        height={px}
        viewBox="0 0 40 40"
        className={clsx("animate-spin", styles.spinner)}
        aria-label={hideLabel ? undefined : label}
        aria-busy="true"
        role="status"
      >
        <circle
          cx="20"
          cy="20"
          r="16"
          stroke="#e5e7eb"
          strokeWidth="4"
          fill="none"
        />
        <circle
          cx="20"
          cy="20"
          r="16"
          stroke={color}
          strokeWidth="4"
          fill="none"
          strokeDasharray={100}
          strokeDashoffset={60}
          strokeLinecap="round"
        />
      </svg>
      {!hideLabel && (
        <span className="text-xs text-gray-400 font-medium mt-0.5">{label}</span>
      )}
    </div>
  );
};

export default Spinner;
