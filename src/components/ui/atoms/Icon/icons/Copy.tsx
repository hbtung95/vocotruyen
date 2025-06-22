import React from "react";
import { IconProps } from "../Icon.types";

const Copy: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <rect x="8" y="8" width="8" height="8" rx="2"/>
    <rect x="4" y="4" width="8" height="8" rx="2"/>
  </svg>
);
export default Copy;
