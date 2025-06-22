import React from "react";
import { IconProps } from "../Icon.types";

const Image: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <rect x="2" y="4" width="16" height="12" rx="2"/>
    <circle cx="7" cy="8" r="2"/>
    <path d="M2 16l5-6 4 5 5-7 2 8"/>
  </svg>
);
export default Image;
