import React from "react";
import { IconProps } from "../Icon.types";

const ChartBar: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <rect x="3" y="10" width="3" height="7" rx="1"/>
    <rect x="8.5" y="6" width="3" height="11" rx="1"/>
    <rect x="14" y="13" width="3" height="4" rx="1"/>
  </svg>
);
export default ChartBar;
