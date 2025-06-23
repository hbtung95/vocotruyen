import React from "react";
import type { StatusDotProps } from "./StatusDot.types";
import styles from "./themes/StatusDotLight.module.css";
import clsx from "clsx";

/**
 * StatusDot – Atom chấm trạng thái online, warning, error, offline...
 */
export const StatusDot: React.FC<StatusDotProps> = ({
  status = "success",
  label,
  size = 12,
  className,
  ...rest
}) => {
  const colorClass = {
    success: styles.success,
    warning: styles.warning,
    error: styles.error,
    info: styles.info,
    offline: styles.offline,
    neutral: styles.neutral,
  }[status] || styles.neutral;

  return (
    <span
      className={clsx(
        "inline-block align-middle rounded-full border border-white shadow-sm",
        styles.dot,
        colorClass,
        className
      )}
      style={{ width: size, height: size, minWidth: size, minHeight: size }}
      aria-label={label || status}
      title={label || status}
      {...rest}
    />
  );
};

export default StatusDot;
