import React from "react";
import { IconProps } from "../Icon.types";

const Camera: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <rect x="3" y="6" width="14" height="11" rx="2"/>
    <circle cx="10" cy="12" r="3"/>
    <path d="M8 6V4h4v2"/>
  </svg>
);
export default Camera;
