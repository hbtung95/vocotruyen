import React from "react";
import { IconProps } from "../Icon.types";

const ChartPie: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <circle cx="10" cy="10" r="8"/>
    <path d="M10 2a8 8 0 0 1 8 8H10z"/>
    <path d="M10 10L2 10a8 8 0 0 1 8-8v8z"/>
  </svg>
);
export default ChartPie;
