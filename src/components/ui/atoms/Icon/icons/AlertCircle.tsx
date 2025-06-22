import React from "react";
import { IconProps } from "../Icon.types";

const AlertCircle: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <circle cx="10" cy="10" r="9"/>
    <line x1="10" y1="6" x2="10" y2="11" />
    <circle cx="10" cy="14" r="1" />
  </svg>
);
export default AlertCircle;
