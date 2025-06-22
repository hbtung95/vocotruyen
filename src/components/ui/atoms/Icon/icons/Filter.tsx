import React from "react";
import { IconProps } from "../Icon.types";

const Filter: React.FC<Omit<IconProps, "name">> = ({
  size = 20,
  color = "currentColor",
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" {...rest}>
    <path d="M3 5h14M6 10h8M9 15h2" />
  </svg>
);
export default Filter;
