import React from "react";
import { IconProps } from "../Icon.types";

const Menu: React.FC<Omit<IconProps, "name">> = ({
  size = 20,
  color = "currentColor",
  ...rest
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    {...rest}
  >
    <line x1="3" y1="6" x2="17" y2="6" />
    <line x1="3" y1="12" x2="17" y2="12" />
    <line x1="3" y1="16" x2="17" y2="16" />
  </svg>
);
export default Menu;
