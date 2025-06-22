import React from "react";
import { IconProps } from "../Icon.types";

const ThumbsUp: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <path d="M2 10h4v8H2v-8zm4 0V7c0-1.1.9-2 2-2h2V3a2 2 0 1 1 4 0v8H6z"/>
  </svg>
);
export default ThumbsUp;
