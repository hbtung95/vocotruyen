import React from "react";
import type { BadgeDotProps } from "./BadgeDot.types";
import styles from "./themes/BadgeDotLight.module.css";
import clsx from "clsx";

/**
 * BadgeDot – Atom chấm/unread badge hoặc số lượng nhỏ (cho icon, avatar, button…)
 */
export const BadgeDot: React.FC<BadgeDotProps> = ({
  count,
  max = 99,
  status = "accent",
  size = 10,
  outlined = false,
  label,
  className,
  ...rest
}) => {
  const showNumber = typeof count === "number" && count > 0;
  const display =
    showNumber && count > max ? `${max}+` : showNumber ? count : undefined;

  const colorClass = {
    accent: styles.accent,
    error: styles.error,
    warning: styles.warning,
    info: styles.info,
    neutral: styles.neutral,
    success: styles.success,
  }[status] || styles.accent;

  return (
    <span
      className={clsx(
        styles.dot,
        colorClass,
        outlined && styles.outlined,
        className
      )}
      style={{
        minWidth: showNumber ? 16 : size,
        height: showNumber ? 16 : size,
        fontSize: showNumber ? 11 : 0,
        borderRadius: showNumber ? 8 : "50%",
        padding: showNumber ? "0 4px" : 0,
        lineHeight: showNumber ? "16px" : 1,
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      aria-label={label || (showNumber ? String(display) : "notification")}
      title={label || (showNumber ? String(display) : "notification")}
      {...rest}
    >
      {showNumber ? display : ""}
    </span>
  );
};

export default BadgeDot;
