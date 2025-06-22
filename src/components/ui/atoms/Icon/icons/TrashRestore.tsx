import React from "react";
import { IconProps } from "../Icon.types";

const TrashRestore: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <rect x="5" y="7" width="10" height="8" rx="2" />
    <path d="M3 7h14M9 10v4M11 14V10M12 13l-2-2-2 2"/>
  </svg>
);
export default TrashRestore;
