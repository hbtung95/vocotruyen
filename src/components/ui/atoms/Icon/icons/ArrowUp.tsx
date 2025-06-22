import React from "react";
import { IconProps } from "../Icon.types";

const ArrowUp: React.FC<Omit<IconProps, "name">> = ({
  size = 20,
  color = "currentColor",
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <line x1="10" y1="15" x2="10" y2="5"/>
    <polyline points="6 9 10 5 14 9"/>
  </svg>
);
export default ArrowUp;
