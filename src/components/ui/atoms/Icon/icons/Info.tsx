import React from "react";
import { IconProps } from "../Icon.types";

const Info: React.FC<Omit<IconProps, "name">> = ({
  size = 20,
  color = "currentColor",
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <circle cx="10" cy="10" r="9" />
    <line x1="10" y1="14" x2="10" y2="10"/>
    <circle cx="10" cy="7" r="1"/>
  </svg>
);
export default Info;
