import React from "react";
import { IconProps } from "../Icon.types";

const Bell: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <path d="M10 18a2 2 0 0 0 2-2H8a2 2 0 0 0 2 2z"/>
    <path d="M18 13V9a8 8 0 1 0-16 0v4l-2 2v1h20v-1l-2-2z"/>
  </svg>
);
export default Bell;
