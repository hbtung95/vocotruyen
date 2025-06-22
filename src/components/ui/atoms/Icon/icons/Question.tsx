import React from "react";
import { IconProps } from "../Icon.types";

const Question: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <circle cx="10" cy="10" r="9" />
    <path d="M10 14h0"/>
    <path d="M10 7a2 2 0 0 1 2 2c0 1.5-2 2-2 4"/>
  </svg>
);
export default Question;
