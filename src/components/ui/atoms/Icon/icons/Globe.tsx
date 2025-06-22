import React from "react";
import { IconProps } from "../Icon.types";

const Globe: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <circle cx="10" cy="10" r="9"/>
    <ellipse cx="10" cy="10" rx="4" ry="9"/>
    <line x1="1" y1="10" x2="19" y2="10"/>
  </svg>
);
export default Globe;
