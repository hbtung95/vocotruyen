import React from "react";
import { IconProps } from "../Icon.types";

const Moon: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <path d="M14.53 13.94A8 8 0 1 1 13 3a6 6 0 0 0 1.53 10.94z"/>
  </svg>
);
export default Moon;
