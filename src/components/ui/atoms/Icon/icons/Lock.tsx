import React from "react";
import { IconProps } from "../Icon.types";

const Lock: React.FC<Omit<IconProps, "name">> = ({
  size = 20,
  color = "currentColor",
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <rect x="4" y="9" width="12" height="7" rx="2"/>
    <path d="M7 9V7a3 3 0 0 1 6 0v2" />
  </svg>
);
export default Lock;
