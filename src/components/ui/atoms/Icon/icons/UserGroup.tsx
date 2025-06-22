import React from "react";
import { IconProps } from "../Icon.types";

const UserGroup: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <circle cx="7" cy="7" r="3"/>
    <circle cx="13" cy="7" r="3"/>
    <path d="M4 17v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
  </svg>
);
export default UserGroup;
