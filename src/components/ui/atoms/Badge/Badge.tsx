import React from "react";
import clsx from "clsx";
import type { BadgeProps } from "./Badge.types";
import styles from "./themes/BadgeLight.module.css";

/**
 * Badge – Atom hiển thị trạng thái hoặc nhãn nhỏ, hỗ trợ variant & theme.
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  pill = false,
  className,
  ...rest
}) => {
  return (
    <span
      className={clsx(
        styles[variant],
        "inline-block px-3 py-1 text-xs font-semibold transition select-none",
        pill ? "rounded-full" : "rounded-lg",
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
};

export default Badge;
