import React from "react";
import clsx from "clsx";
import { Button, ButtonProps } from "../Button";

/**
 * IconButton – Nút chỉ chứa icon (có thể có aria-label)
 */
const IconButton: React.FC<ButtonProps & { "aria-label": string }> = ({
  children,
  className,
  size = "md",
  ...rest
}) => (
  <Button
    {...rest}
    size={size}
    className={clsx(
      "p-2 rounded-full flex items-center justify-center",
      size === "sm" && "w-8 h-8",
      size === "md" && "w-10 h-10",
      size === "lg" && "w-12 h-12",
      className
    )}
  >
    {children}
  </Button>
);

export default IconButton;
