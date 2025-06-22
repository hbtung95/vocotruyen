import React from "react";
import { IconProps } from "../Icon.types";

const Refresh: React.FC<Omit<IconProps, "name">> = ({
  size = 20,
  color = "currentColor",
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <path d="M4 4v4h4"/>
    <path d="M4.93 15.07A8 8 0 1 0 4 8"/>
  </svg>
);
export default Refresh;
