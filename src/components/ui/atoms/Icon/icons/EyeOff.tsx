import React from "react";
import { IconProps } from "../Icon.types";

const EyeOff: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <path d="M1 1l18 18M17.94 13.94A10.93 10.93 0 0 0 19 10s-3-6-9-6a9.77 9.77 0 0 0-4.9 1.36M6.34 6.34A3 3 0 0 1 10 7a3 3 0 0 1 3 3c0 .7-.24 1.34-.65 1.85"/>
    <path d="M3.13 3.13A9.94 9.94 0 0 0 1 10s3 6 9 6a9.74 9.74 0 0 0 4.9-1.36"/>
  </svg>
);
export default EyeOff;
