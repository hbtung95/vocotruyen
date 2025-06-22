import React from "react";
import { IconProps } from "../Icon.types";

const Trash: React.FC<Omit<IconProps, "name">> = ({
  size = 20,
  color = "currentColor",
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <rect x="5" y="7" width="10" height="8" rx="2" />
    <path d="M3 7h14M8 7v6M12 7v6M7 4h6v3H7V4z" />
  </svg>
);
export default Trash;
