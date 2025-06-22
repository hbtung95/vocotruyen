import React from "react";
import { IconProps } from "../Icon.types";

const Send: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <polygon points="2 16 10 2 18 16 10 13"/>
  </svg>
);
export default Send;
