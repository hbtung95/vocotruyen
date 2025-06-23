import React from "react";
import type { ChipProps } from "./Chip.types";
import styles from "./themes/ChipLight.module.css";
import clsx from "clsx";

/**
 * Chip – Atom nhãn nhỏ, filter/tag/trạng thái, có thể closable và icon
 */
export const Chip: React.FC<ChipProps> = ({
  children,
  color = "accent",
  closable = false,
  onClose,
  iconLeft,
  iconRight,
  size = "md",
  className,
  ...rest
}) => {
  const colorClass = {
    accent: styles.accent,
    success: styles.success,
    error: styles.error,
    info: styles.info,
    warning: styles.warning,
    neutral: styles.neutral,
  }[color] || styles.accent;

  const sizeClass = {
    sm: styles.sm,
    md: styles.md,
    lg: styles.lg,
  }[size] || styles.md;

  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-full font-medium",
        styles.chip,
        colorClass,
        sizeClass,
        className
      )}
      tabIndex={0}
      role="listitem"
      {...rest}
    >
      {iconLeft && <span className={styles.icon}>{iconLeft}</span>}
      <span className="truncate">{children}</span>
      {iconRight && <span className={styles.icon}>{iconRight}</span>}
      {closable && (
        <button
          type="button"
          tabIndex={0}
          className={clsx(styles.close, "ml-0.5 text-gray-400 hover:text-red-500")}
          aria-label="Xoá chip"
          onClick={onClose}
        >
          ×
        </button>
      )}
    </span>
  );
};

export default Chip;
