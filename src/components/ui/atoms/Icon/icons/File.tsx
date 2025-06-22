import React from "react";
import { IconProps } from "../Icon.types";

const File: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <rect x="4" y="2" width="12" height="16" rx="2"/>
    <path d="M8 2v6h4V2"/>
  </svg>
);
export default File;
