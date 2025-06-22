import React from "react";
import { IconProps } from "../Icon.types";

const Settings: React.FC<Omit<IconProps, "name">> = ({
  size = 20,
  color = "currentColor",
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <circle cx="10" cy="10" r="3" />
    <path d="M4.22 4.22l1.42 1.42M15.36 4.22l-1.42 1.42M4.22 15.78l1.42-1.42M15.36 15.78l-1.42-1.42M2 10h2M16 10h2M10 2v2M10 16v2" />
  </svg>
);
export default Settings;
