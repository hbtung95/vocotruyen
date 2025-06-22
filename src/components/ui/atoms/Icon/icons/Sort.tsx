import React from "react";
import { IconProps } from "../Icon.types";

const Sort: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <polyline points="7 13 10 16 13 13"/>
    <polyline points="7 7 10 4 13 7"/>
    <line x1="10" y1="16" x2="10" y2="4"/>
  </svg>
);
export default Sort;
