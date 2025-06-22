import React from "react";
import { IconProps } from "../Icon.types";

const VolumeOff: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <polygon points="3 8 7 8 11 4 11 16 7 12 3 12"/>
    <line x1="15" y1="5" x2="19" y2="15"/>
    <line x1="19" y1="5" x2="15" y2="15"/>
  </svg>
);
export default VolumeOff;
