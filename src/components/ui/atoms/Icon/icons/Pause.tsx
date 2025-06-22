import React from "react";
import { IconProps } from "../Icon.types";

const Pause: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill={color} {...rest}>
    <rect x="5" y="4" width="3" height="12"/>
    <rect x="12" y="4" width="3" height="12"/>
  </svg>
);
export default Pause;
