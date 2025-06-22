import React from "react";
import { IconProps } from "../Icon.types";

const Loading: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg className="animate-spin" width={size} height={size} viewBox="0 0 20 20" fill="none" {...rest}>
    <circle className="opacity-25" cx="10" cy="10" r="8" stroke={color} strokeWidth={4} />
    <path className="opacity-75" fill={color} d="M18 10a8 8 0 11-8-8v8h8z"/>
  </svg>
);
export default Loading;
