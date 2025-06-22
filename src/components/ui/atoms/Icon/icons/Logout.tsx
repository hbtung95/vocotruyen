import React from "react";
import { IconProps } from "../Icon.types";

const Logout: React.FC<Omit<IconProps, "name">> = ({
  size = 20,
  color = "currentColor",
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <path d="M6 17v-2a2 2 0 0 1 2-2h6"/>
    <polyline points="14 7 18 10 14 13"/>
    <line x1="18" y1="10" x2="10" y2="10"/>
    <rect x="2" y="3" width="8" height="14" rx="2"/>
  </svg>
);
export default Logout;
