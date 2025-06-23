import React from "react";
import type { MenuButtonProps } from "./MenuButton.types";
import styles from "./themes/MenuButtonLight.module.css";
import clsx from "clsx";

/**
 * MenuButton – Atom nút mở menu (dropdown, popover...), variant, size, icon, caret
 */
export const MenuButton: React.FC<MenuButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  open = false,
  caret = true,
  className,
  ...rest
}) => {
  const sizeClass = {
    sm: styles.sm,
    md: styles.md,
    lg: styles.lg,
  }[size] || styles.md;

  const variantClass = {
    primary: styles.primary,
    outline: styles.outline,
    ghost: styles.ghost,
  }[variant] || styles.primary;

  return (
    <button
      type="button"
      className={clsx(
        "inline-flex items-center gap-1 rounded-lg font-medium transition focus:outline-none shadow-sm select-none",
        styles.button,
        sizeClass,
        variantClass,
        open && styles.open,
        className
      )}
      aria-haspopup="menu"
      aria-expanded={open}
      {...rest}
    >
      {children}
      {caret && (
        <span className={clsx("ml-1", styles.caret)} aria-hidden="true">
          {open ? "▲" : "▼"}
        </span>
      )}
    </button>
  );
};

export default MenuButton;
