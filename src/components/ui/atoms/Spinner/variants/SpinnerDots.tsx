import React from "react";
import type { SpinnerProps } from "../Spinner.types";

/**
 * SpinnerDots – Spinner 3 chấm nhấp nháy
 */
const SpinnerDots: React.FC<Omit<SpinnerProps, "size">> = ({
  color = "#2563eb",
  label = "Đang tải...",
  hideLabel = false,
  className,
  ...rest
}) => (
  <div className={["flex flex-col items-center gap-1", className].join(" ")} {...rest}>
    <span className="flex gap-1">
      <span style={{
        width: 10, height: 10, background: color,
        borderRadius: "100%", display: "inline-block",
        animation: "spinnerDot 1s infinite alternate"
      }} />
      <span style={{
        width: 10, height: 10, background: color,
        borderRadius: "100%", display: "inline-block",
        animation: "spinnerDot 1s infinite alternate 0.2s"
      }} />
      <span style={{
        width: 10, height: 10, background: color,
        borderRadius: "100%", display: "inline-block",
        animation: "spinnerDot 1s infinite alternate 0.4s"
      }} />
    </span>
    {!hideLabel && (
      <span className="text-xs text-gray-400 font-medium mt-0.5">{label}</span>
    )}
    <style>
      {`
      @keyframes spinnerDot {
        0% { opacity: 0.2; transform: scale(0.85);}
        100% { opacity: 1; transform: scale(1);}
      }
      `}
    </style>
  </div>
);

export default SpinnerDots;
