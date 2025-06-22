import React from "react";
import { IconProps } from "../Icon.types";

const XCircle: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <circle cx="10" cy="10" r="9"/>
    <line x1="7" y1="7" x2="13" y2="13"/>
    <line x1="13" y1="7" x2="7" y2="13"/>
  </svg>
);
export default XCircle;
