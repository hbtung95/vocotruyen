import React from "react";
import type { AlertProps } from "./Alert.types";
import styles from "./themes/AlertLight.module.css";
import clsx from "clsx";

/**
 * Alert – Atom hiển thị thông báo dạng info/success/warning/error
 */
export const Alert: React.FC<AlertProps> = ({
  children,
  type = "info",
  title,
  closable = false,
  onClose,
  className,
  ...rest
}) => {
  const typeClass = {
    info: styles.info,
    success: styles.success,
    warning: styles.warning,
    error: styles.error,
  }[type];

  return (
    <div
      className={clsx(
        "flex items-start gap-3 px-4 py-3 rounded-xl text-sm shadow",
        styles.alert,
        typeClass,
        className
      )}
      role={type === "error" ? "alert" : "status"}
      {...rest}
    >
      <span className={clsx("mt-0.5", styles.icon)}>
        {type === "info" && "ℹ️"}
        {type === "success" && "✅"}
        {type === "warning" && "⚠️"}
        {type === "error" && "⛔"}
      </span>
      <div className="flex-1 min-w-0">
        {title && <div className="font-semibold mb-0.5">{title}</div>}
        <div>{children}</div>
      </div>
      {closable && (
        <button
          className={clsx("ml-3 mt-1 text-gray-400 hover:text-red-500 rounded")}
          aria-label="Đóng"
          onClick={onClose}
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Alert;
