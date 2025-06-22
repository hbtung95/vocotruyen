import React from "react";
import { IconProps } from "../Icon.types";

const GlobeAlt: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <circle cx="10" cy="10" r="9"/>
    <ellipse cx="10" cy="10" rx="9" ry="3"/>
    <ellipse cx="10" cy="10" rx="3" ry="9"/>
  </svg>
);
export default GlobeAlt;
