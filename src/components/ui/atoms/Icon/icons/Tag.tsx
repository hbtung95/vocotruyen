import React from "react";
import { IconProps } from "../Icon.types";

const Tag: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <path d="M2 10V2h8l8 8-8 8-8-8z"/>
    <circle cx="6" cy="6" r="1"/>
  </svg>
);
export default Tag;
