import React from "react";
import { IconProps } from "../Icon.types";

const Search: React.FC<Omit<IconProps, "name">> = ({
  size = 20,
  color = "currentColor",
  ...rest
}) => (
  <svg
    width={typeof size === "number" ? size : 20}
    height={typeof size === "number" ? size : 20}
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    {...rest}
  >
    <circle cx="9" cy="9" r="7" stroke={color} strokeWidth="2" />
    <line x1="15" y1="15" x2="19" y2="19" stroke={color} strokeWidth="2" />
  </svg>
);
export default Search;
