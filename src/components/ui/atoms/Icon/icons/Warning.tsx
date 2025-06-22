import React from "react";
import { IconProps } from "../Icon.types";

const Warning: React.FC<Omit<IconProps, "name">> = ({
  size = 20,
  color = "currentColor",
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <polygon points="10,3 19,17 1,17" />
    <line x1="10" y1="7" x2="10" y2="12" />
    <circle cx="10" cy="15" r="1" />
  </svg>
);
export default Warning;
