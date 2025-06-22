import React from "react";
import { IconProps } from "../Icon.types";

const Shield: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <path d="M10 2l7 3v5c0 6-7 8-7 8s-7-2-7-8V5l7-3z"/>
  </svg>
);
export default Shield;
