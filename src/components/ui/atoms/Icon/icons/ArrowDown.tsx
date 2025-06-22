import React from "react";
import { IconProps } from "../Icon.types";

const ArrowDown: React.FC<Omit<IconProps, "name">> = ({
  size = 20,
  color = "currentColor",
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <line x1="10" y1="5" x2="10" y2="15"/>
    <polyline points="6 11 10 15 14 11"/>
  </svg>
);
export default ArrowDown;
