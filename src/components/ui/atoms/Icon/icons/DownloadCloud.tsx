import React from "react";
import { IconProps } from "../Icon.types";

const DownloadCloud: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <path d="M16.9 13.1A5 5 0 1 0 8 8.1"/>
    <polyline points="12 12 12 17 15 14"/>
    <line x1="12" y1="17" x2="9" y2="14"/>
    <line x1="4" y1="17" x2="16" y2="17"/>
  </svg>
);
export default DownloadCloud;
