import React from "react";
import { IconProps } from "../Icon.types";

const MapPin: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <path d="M10 18s6-5.27 6-10A6 6 0 1 0 4 8c0 4.73 6 10 6 10z"/>
    <circle cx="10" cy="8" r="2"/>
  </svg>
);
export default MapPin;
