import React from "react";
import { IconProps } from "../Icon.types";

const User: React.FC<Omit<IconProps, "name">> = ({
  size = 20,
  color = "currentColor",
  ...rest
}) => (
  <svg
    width={typeof size === "number" ? size : 20}
    height={typeof size === "number" ? size : 20}
    viewBox="0 0 20 20"
    fill="none"
    stroke={color}
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    <circle cx="10" cy="7" r="4" />
    <path d="M2 18c0-2.8 5-4.2 8-4.2s8 1.4 8 4.2v1H2v-1z" />
  </svg>
);

export default User;
