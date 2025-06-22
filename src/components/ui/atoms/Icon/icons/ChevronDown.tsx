import React from "react";
import { IconProps } from "../Icon.types";

const ChevronDown: React.FC<Omit<IconProps, "name">> = ({
  size = 20,
  color = "currentColor",
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <polyline points="6 8 10 12 14 8"/>
  </svg>
);
export default ChevronDown;
