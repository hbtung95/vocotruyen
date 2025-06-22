import React from "react";
import { IconProps } from "../Icon.types";

const EnvelopeOpen: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <path d="M2 7l8 5 8-5"/>
    <rect x="2" y="7" width="16" height="9" rx="2"/>
    <path d="M2 7l8-5 8 5"/>
  </svg>
);
export default EnvelopeOpen;
