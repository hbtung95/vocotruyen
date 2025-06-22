import React from "react";
import { IconProps } from "../Icon.types";

const ChevronLeft: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <polyline points="13 6 9 10 13 14"/>
  </svg>
);
export default ChevronLeft;
