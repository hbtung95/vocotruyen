import React from "react";
import { IconProps } from "../Icon.types";

const Attachment: React.FC<Omit<IconProps, "name">> = ({
  size = 20,
  color = "currentColor",
  ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth={2} {...rest}>
    <rect x="7" y="7" width="10" height="6" rx="2"/>
    <path d="M3 12a4 4 0 0 0 4 4h7" />
  </svg>
);
export default Attachment;
