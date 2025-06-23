import React from "react";
import { Button, ButtonProps } from "../Button";

/**
 * ButtonOutline – Nút viền, trong suốt, hover đổi màu nền
 */
const ButtonOutline: React.FC<ButtonProps> = (props) => (
  <Button
    {...props}
    variant="outline"
    className={[
      "border border-accent bg-transparent text-accent hover:bg-accent/10 focus:ring-2 focus:ring-accent",
      props.className,
    ].join(" ")}
  />
);

export default ButtonOutline;
