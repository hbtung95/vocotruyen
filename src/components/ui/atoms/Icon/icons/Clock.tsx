import React from "react";
import { IconProps } from "../Icon.types";

const Clock: React.FC<Omit<IconProps, "name">> = ({
  size = 20,
  color = "currentColor",
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" {...rest}>
    <circle cx="10" cy="10" r="8" />
    <path d="M10 10V6M10 10l3 3" />
  </svg>
);
export default Clock;
