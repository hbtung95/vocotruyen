import React from "react";
import { IconProps } from "../Icon.types";

const Star: React.FC<Omit<IconProps, "name">> = ({
  size = 20, color = "currentColor", ...rest
}) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill={color} stroke={color} strokeWidth={1} {...rest}>
    <polygon points="10,2 12.39,7.56 18.51,7.97 13.74,12.02 15.27,18.02 10,14.76 4.73,18.02 6.26,12.02 1.49,7.97 7.61,7.56" />
  </svg>
);
export default Star;
