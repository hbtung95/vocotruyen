import React from "react";
import { IconProps } from "../Icon.types";

const ArrowRight: React.FC<Omit<IconProps, "name">> = ({
  size = 20,
  color = "currentColor",
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <line x1="5" y1="10" x2="15" y2="10"/>
    <polyline points="11 6 15 10 11 14"/>
  </svg>
);
export default ArrowRight;
