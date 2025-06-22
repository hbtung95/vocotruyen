import React from "react";
import { IconProps } from "../Icon.types";

const VolumeUp: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <polygon points="3 8 7 8 11 4 11 16 7 12 3 12"/>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
  </svg>
);
export default VolumeUp;
