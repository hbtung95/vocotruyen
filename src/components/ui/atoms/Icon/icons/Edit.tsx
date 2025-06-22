import React from "react";
import { IconProps } from "../Icon.types";

const Edit: React.FC<Omit<IconProps, "name">> = ({
  size = 20,
  color = "currentColor",
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <path d="M15.7 5.7l-1.4-1.4a1 1 0 0 0-1.4 0L4 13.6V16h2.4l8.9-8.9a1 1 0 0 0 0-1.4z"/>
  </svg>
);
export default Edit;
