import React from "react";

type Props = {
  width?: string;
  height?: string;
  className?: string;
};

const Skeleton: React.FC<Props> = ({ width = "100%", height = "2rem", className }) => (
  <div
    className={`bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 animate-pulse rounded-xl ${className || ""}`}
    style={{ width, height }}
  />
);

export default Skeleton;
