import React from "react";
import { IconProps } from "../Icon.types";

const Gift: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <rect x="3" y="8" width="14" height="9" rx="2"/>
    <path d="M3 8h14M10 8v9"/>
    <circle cx="7.5" cy="5.5" r="2.5"/>
    <circle cx="12.5" cy="5.5" r="2.5"/>
  </svg>
);
export default Gift;
