import React from "react";
import { IconProps } from "../Icon.types";

const ShoppingCart: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <circle cx="7" cy="17" r="1"/>
    <circle cx="15" cy="17" r="1"/>
    <path d="M2 2h2l2.4 12.3a2 2 0 0 0 2 1.7h6.2a2 2 0 0 0 2-1.7l1.4-7H5.3"/>
  </svg>
);
export default ShoppingCart;
