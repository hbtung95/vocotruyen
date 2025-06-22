import React from "react";
import { IconProps } from "../Icon.types";

const Microphone: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <rect x="7" y="3" width="6" height="10" rx="3"/>
    <path d="M10 17v-2"/>
    <path d="M5 10a5 5 0 0 0 10 0"/>
  </svg>
);
export default Microphone;
