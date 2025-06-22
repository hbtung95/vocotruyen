import React from "react";
import { IconProps } from "../Icon.types";

const ChevronDoubleDown: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <polyline points="5 8 10 13 15 8"/>
    <polyline points="5 13 10 18 15 13"/>
  </svg>
);
export default ChevronDoubleDown;
