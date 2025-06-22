import React from "react";
import { IconProps } from "../Icon.types";

const MoreVertical: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...rest}>
    <circle cx="10" cy="4" r="1.5" fill={color} />
    <circle cx="10" cy="10" r="1.5" fill={color} />
    <circle cx="10" cy="16" r="1.5" fill={color} />
  </svg>
);
export default MoreVertical;
