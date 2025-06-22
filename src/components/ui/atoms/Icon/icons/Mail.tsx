import React from "react";
import { IconProps } from "../Icon.types";

const Mail: React.FC<Omit<IconProps, "name">> = ({
  size = 20,
  color = "currentColor",
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <rect x="3" y="5" width="14" height="10" rx="2"/>
    <polyline points="3 5 10 12 17 5" />
  </svg>
);
export default Mail;
