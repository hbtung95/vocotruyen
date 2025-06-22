import React from "react";
import { IconProps } from "../Icon.types";

const Clipboard: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <rect x="5" y="3" width="10" height="16" rx="2"/>
    <rect x="7" y="1" width="6" height="4" rx="1"/>
  </svg>
);
export default Clipboard;
