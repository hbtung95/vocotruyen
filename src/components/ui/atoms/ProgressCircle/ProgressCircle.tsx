import React from "react";
import type { ProgressCircleProps } from "./ProgressCircle.types";
import styles from "./themes/ProgressCircleLight.module.css";
import clsx from "clsx";

/**
 * ProgressCircle – Atom loading/progress vòng tròn, % value, tối ưu dashboard, form
 */
export const ProgressCircle: React.FC<ProgressCircleProps> = ({
  value,
  size = 40,
  thickness = 4,
  color = "#1976d2",
  showLabel = false,
  className,
  ...rest
}) => {
  const radius = (size - thickness) / 2;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (value / 100) * circ;

  return (
    <div
      className={clsx(
        "inline-flex items-center justify-center relative",
        styles.circle,
        className
      )}
      style={{ width: size, height: size }}
      aria-label="progress"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      {...rest}
    >
      <svg width={size} height={size}>
        <circle
          className={styles.track}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={thickness}
          fill="none"
        />
        <circle
          className={styles.progress}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={thickness}
          fill="none"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      {showLabel && (
        <span
          className={clsx(
            "absolute inset-0 flex items-center justify-center font-semibold text-xs",
            styles.label
          )}
        >
          {Math.round(value)}%
        </span>
      )}
    </div>
  );
};

export default ProgressCircle;
