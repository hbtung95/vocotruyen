import React from "react";
import { Link, LinkProps } from "../Link";

/**
 * LinkExternal – Link mở tab mới, có icon external
 */
const LinkExternal: React.FC<Omit<LinkProps, "external">> = (props) => (
  <Link {...props} external />
);

export default LinkExternal;
