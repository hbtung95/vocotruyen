import React from "react";
import { IconProps } from "../Icon.types";

const Pin: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <path d="M10 2v14M7 7h6l-1 6H8l-1-6z"/>
  </svg>
);
export default Pin;
