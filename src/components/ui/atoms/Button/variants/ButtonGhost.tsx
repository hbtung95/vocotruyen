import React from "react";
import { Button, ButtonProps } from "../Button";

/**
 * ButtonGhost – Nút không viền, chỉ hiệu ứng hover
 */
const ButtonGhost: React.FC<ButtonProps> = (props) => (
  <Button
    {...props}
    variant="ghost"
    className={[
      "bg-transparent text-accent hover:bg-accent/5 focus:ring-2 focus:ring-accent",
      props.className,
    ].join(" ")}
  />
);

export default ButtonGhost;
