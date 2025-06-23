import React from "react";
import type { IconButtonProps } from "./IconButton.types";
import styles from "./themes/IconButtonLight.module.css";
import clsx from "clsx";

/**
 * IconButton – Atom nút icon nhỏ (action), hỗ trợ variant, size, loading, a11y
 */
export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  size = "md",
  variant = "primary",
  loading = false,
  className,
  disabled,
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
    danger: styles.danger,
    ghost: styles.ghost,
  }[variant] || styles.primary;

  return (
    <button
      type="button"
      className={clsx(
        "inline-flex items-center justify-center rounded-full focus:outline-none transition shadow-sm",
        styles.button,
        sizeClass,
        variantClass,
        loading && styles.loading,
        className
      )}
      disabled={disabled || loading}
      tabIndex={0}
      {...rest}
    >
      {loading ? (
        <span className={clsx("animate-spin", styles.spinner)} aria-hidden="true">⏳</span>
      ) : (
        icon
      )}
    </button>
  );
};

export default IconButton;
