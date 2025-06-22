import React from "react";
import { IconProps } from "../Icon.types";

const Play: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill={color} {...rest}>
    <polygon points="6 4 16 10 6 16 6 4"/>
  </svg>
);
export default Play;
