import React from "react";
import { IconProps } from "../Icon.types";

const Success: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <circle cx="10" cy="10" r="9"/>
    <polyline points="6 10 9 13 14 7"/>
  </svg>
);
export default Success;
