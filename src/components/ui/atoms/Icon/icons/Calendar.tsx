import React from "react";
import { IconProps } from "../Icon.types";

const Calendar: React.FC<Omit<IconProps, "name">> = ({
  size = 20,
  color = "currentColor",
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <rect x="3" y="5" width="14" height="12" rx="2"/>
    <path d="M16 3v4M4 3v4M3 9h14" />
  </svg>
);
export default Calendar;
