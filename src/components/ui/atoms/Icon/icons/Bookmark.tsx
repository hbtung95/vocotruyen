import React from "react";
import { IconProps } from "../Icon.types";

const Bookmark: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <path d="M5 3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14l-7-5-7 5V3z"/>
  </svg>
);
export default Bookmark;
