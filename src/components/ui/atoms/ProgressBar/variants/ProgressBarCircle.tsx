import React from "react";
import { ProgressBarProps } from "../ProgressBar.types";

/**
 * ProgressBarCircle – Thanh tiến trình hình tròn, SVG
 */
const ProgressBarCircle: React.FC<
  Omit<ProgressBarProps, "thickness">
> = ({
  value = 0,
  showLabel = false,
  color = "accent",
  indeterminate = false,
  className,
  ...rest
}) => {
  const size = 48;
  const stroke = 5;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const percent = indeterminate ? 25 : Math.min(Math.max(value, 0), 100);
  const offset = circumference - (percent / 100) * circumference;

  const colorClass = {
    accent: "#2563eb",
    success: "#22c55e",
    error: "#ef4444",
    warning: "#eab308",
  }[color] || "#2563eb";

  return (
    <div className={`flex flex-col items-center justify-center ${className || ""}`} {...rest}>
      <svg width={size} height={size} className="block">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={colorClass}
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={indeterminate ? circumference * 0.5 : offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.6s cubic-bezier(.4,2.3,.3,1)" }}
        />
      </svg>
      {showLabel && (
        <span className="text-xs font-medium text-gray-500 mt-1">
          {indeterminate ? "..." : `${value}%`}
        </span>
      )}
    </div>
  );
};

export default ProgressBarCircle;
