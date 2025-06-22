import React from "react";
import { IconProps } from "../Icon.types";

const Printer: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <rect x="5" y="2" width="10" height="6" rx="1"/>
    <rect x="4" y="10" width="12" height="8" rx="1"/>
    <circle cx="16" cy="14" r="1"/>
  </svg>
);
export default Printer;
