import React from "react";
import { IconProps } from "../Icon.types";

const X: React.FC<Omit<IconProps, "name">> = ({
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
    <line x1="5" y1="5" x2="15" y2="15" />
    <line x1="15" y1="5" x2="5" y2="15" />
  </svg>
);

export default X;
