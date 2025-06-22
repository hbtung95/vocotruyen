import React from "react";
import { IconProps } from "../Icon.types";

const Upload: React.FC<Omit<IconProps, "name">> = ({
  size = 20,
  color = "currentColor",
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" {...rest}>
    <path d="M10 16V7" />
    <polyline points="14 9 10 5 6 9" />
    <rect x="4" y="17" width="12" height="2" rx="1" fill={color} />
  </svg>
);
export default Upload;
