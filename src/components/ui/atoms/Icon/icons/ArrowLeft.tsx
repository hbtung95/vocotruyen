import React from "react";
import { IconProps } from "../Icon.types";

const ArrowLeft: React.FC<Omit<IconProps, "name">> = ({
  size = 20,
  color = "currentColor",
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <line x1="15" y1="10" x2="5" y2="10"/>
    <polyline points="9 6 5 10 9 14"/>
  </svg>
);
export default ArrowLeft;
