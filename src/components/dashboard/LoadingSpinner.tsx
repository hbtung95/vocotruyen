import React from "react";

const LoadingSpinner: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <div className="flex items-center justify-center w-full h-full">
    <svg
      width={size}
      height={size}
      className="animate-spin"
      viewBox="0 0 50 50"
      fill="none"
    >
      <circle
        cx="25"
        cy="25"
        r="22"
        stroke="#3b82f6"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="100 30"
        opacity={0.3}
      />
      <circle
        cx="25"
        cy="25"
        r="22"
        stroke="#3b82f6"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="35 90"
      />
    </svg>
  </div>
);

export default LoadingSpinner;
