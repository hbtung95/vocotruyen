import React from "react";
import clsx from "clsx";
import type { ProgressBarProps } from "./ProgressBar.types";
import styles from "./themes/ProgressBarLight.module.css";

/**
 * ProgressBar – Atom thanh tiến trình cơ bản, a11y, theme, variant.
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({
  value = 0,
  showLabel = false,
  color = "accent",
  indeterminate = false,
  thickness = 8,
  className,
  ...rest
}) => {
  return (
    <div className="w-full flex flex-col gap-1" {...rest}>
      <div
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuemin={indeterminate ? undefined : 0}
        aria-valuemax={indeterminate ? undefined : 100}
        aria-busy={indeterminate}
        className={clsx(
          "relative w-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700",
          styles.bar,
          className
        )}
        style={{ height: typeof thickness === "number" ? `${thickness}px` : thickness }}
      >
        <div
          className={clsx(
            "absolute left-0 top-0 h-full transition-all",
            indeterminate
              ? styles.indeterminate
              : [
                  color === "accent" && "bg-accent",
                  color === "success" && "bg-green-500",
                  color === "error" && "bg-red-500",
                  color === "warning" && "bg-yellow-400",
                ]
          )}
          style={{
            width: indeterminate ? "40%" : `${Math.min(Math.max(value, 0), 100)}%`,
          }}
        />
      </div>
      {showLabel && !indeterminate && (
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-0.5">
          {value}%
        </span>
      )}
      {indeterminate && showLabel && (
        <span className="text-xs font-medium text-gray-400 mt-0.5">Đang xử lý...</span>
      )}
    </div>
  );
};

export default ProgressBar;
