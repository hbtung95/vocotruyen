import React from "react";
import { IconProps } from "../Icon.types";

const Phone: React.FC<Omit<IconProps, "name">> = ({
  size = 20,
  color = "currentColor",
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h2A2.5 2.5 0 0 1 9 5.5v2A2.5 2.5 0 0 1 6.5 10h-2A2.5 2.5 0 0 1 2 7.5v-2z" />
    <path d="M10 13a8.38 8.38 0 0 0 8 4.5V17a2 2 0 0 0-2-2h-2.28a1 1 0 0 1-1-.74l-.5-2A1 1 0 0 0 11 11.5V9.5A1 1 0 0 1 12 8.5h2A2 2 0 0 0 16 6.5V5.5" />
  </svg>
);
export default Phone;
