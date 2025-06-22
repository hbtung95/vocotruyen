import React from "react";
import { IconProps } from "../Icon.types";

const Folder: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <rect x="2" y="6" width="16" height="12" rx="2"/>
    <path d="M2 6l4-4h8l4 4"/>
  </svg>
);
export default Folder;
