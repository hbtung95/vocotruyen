import React from "react";
import { IconProps } from "../Icon.types";

const Minus: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <line x1="5" y1="10" x2="15" y2="10"/>
  </svg>
);
export default Minus;
