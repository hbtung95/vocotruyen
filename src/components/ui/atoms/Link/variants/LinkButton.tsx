import React from "react";
import { Link, LinkProps } from "../Link";

/**
 * LinkButton – Link dạng nút (không gạch chân, style như button)
 */
const LinkButton: React.FC<Omit<LinkProps, "underline">> = (props) => (
  <Link
    {...props}
    underline={false}
    className={[
      "rounded-lg px-3 py-1 bg-accent/10 text-accent hover:bg-accent/20",
      props.className,
    ].join(" ")}
  />
);

export default LinkButton;
