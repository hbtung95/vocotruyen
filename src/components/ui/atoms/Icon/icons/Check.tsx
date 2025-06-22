import React from "react";
import { IconProps } from "../Icon.types";

const Check: React.FC<Omit<IconProps, "name">> = ({
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
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    <polyline points="4 11 9 16 16 6" />
  </svg>
);

export default Check;
