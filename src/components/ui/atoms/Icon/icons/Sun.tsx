import React from "react";
import { IconProps } from "../Icon.types";

const Sun: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <circle cx="10" cy="10" r="4"/>
    <line x1="10" y1="2" x2="10" y2="4"/>
    <line x1="10" y1="16" x2="10" y2="18"/>
    <line x1="4" y1="10" x2="2" y2="10"/>
    <line x1="18" y1="10" x2="16" y2="10"/>
    <line x1="5.64" y1="5.64" x2="4.22" y2="4.22"/>
    <line x1="15.78" y1="15.78" x2="14.36" y2="14.36"/>
    <line x1="5.64" y1="14.36" x2="4.22" y2="15.78"/>
    <line x1="15.78" y1="4.22" x2="14.36" y2="5.64"/>
  </svg>
);
export default Sun;
