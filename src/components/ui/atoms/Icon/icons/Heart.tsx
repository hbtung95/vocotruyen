import React from "react";
import { IconProps } from "../Icon.types";

const Heart: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill={color} stroke={color} strokeWidth={1} {...rest}>
    <path d="M10 17s-6-4.35-6-8.5C4 5.36 6.42 3 10 6.28 13.58 3 16 5.36 16 8.5c0 4.15-6 8.5-6 8.5z" />
  </svg>
);
export default Heart;
