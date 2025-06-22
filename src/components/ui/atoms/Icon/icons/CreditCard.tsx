import React from "react";
import { IconProps } from "../Icon.types";

const CreditCard: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <rect x="2" y="5" width="16" height="10" rx="2"/>
    <line x1="2" y1="9" x2="18" y2="9"/>
  </svg>
);
export default CreditCard;
