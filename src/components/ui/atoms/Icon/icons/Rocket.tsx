import React from "react";
import { IconProps } from "../Icon.types";

const Rocket: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <path d="M4 15l1-4 6-6 4 1-1 4-6 6-4-1z"/>
    <circle cx="10" cy="10" r="2"/>
    <path d="M5 19l1-2 2 1-1 2z"/>
  </svg>
);
export default Rocket;
