import React from "react";
import { IconProps } from "../Icon.types";

const Download: React.FC<Omit<IconProps, "name">> = ({
  size = 20,
  color = "currentColor",
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" {...rest}>
    <path d="M10 4v9" />
    <polyline points="6 11 10 15 14 11" />
    <rect x="4" y="17" width="12" height="2" rx="1" fill={color} />
  </svg>
);
export default Download;
