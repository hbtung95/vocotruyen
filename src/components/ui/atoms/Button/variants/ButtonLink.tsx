import React from "react";
import { Button, ButtonProps } from "../Button";

/**
 * ButtonLink – Nút dạng link, underline, dùng cho action nhẹ
 */
const ButtonLink: React.FC<ButtonProps> = (props) => (
  <Button
    {...props}
    variant="link"
    className={[
      "bg-transparent underline text-accent hover:text-accent/80 p-0 focus:ring-2 focus:ring-accent",
      props.className,
    ].join(" ")}
  />
);

export default ButtonLink;
