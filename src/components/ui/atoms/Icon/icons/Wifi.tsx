import React from "react";
import { IconProps } from "../Icon.types";

const Wifi: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <path d="M2.05 7.55a13.07 13.07 0 0 1 15.9 0"/>
    <path d="M5.35 10.75a8.23 8.23 0 0 1 9.3 0"/>
    <path d="M8.64 13.95a3.39 3.39 0 0 1 2.72 0"/>
    <circle cx="10" cy="16.5" r="1"/>
  </svg>
);
export default Wifi;
