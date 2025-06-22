import React from "react";
import { IconProps } from "../Icon.types";

const Stop: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill={color} {...rest}>
    <rect x="5" y="5" width="10" height="10" rx="2"/>
  </svg>
);
export default Stop;
