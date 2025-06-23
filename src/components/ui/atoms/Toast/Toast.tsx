import React, { useEffect } from "react";
import type { ToastProps } from "./Toast.types";
import styles from "./themes/ToastLight.module.css";
import clsx from "clsx";

/**
 * Toast – Atom hiển thị notification nhỏ, variant info/success/warning/error, closable, tự ẩn.
 */
export const Toast: React.FC<ToastProps> = ({
  open,
  children,
  type = "info",
  closable = false,
  onClose,
  className,
  duration,
  ...rest
}) => {
  useEffect(() => {
    if (!open || !duration) return;
    const timer = setTimeout(() => onClose && onClose(), duration);
    return () => clearTimeout(timer);
  }, [open, duration, onClose]);

  if (!open) return null;

  const typeClass = {
    info: styles.info,
    success: styles.success,
    warning: styles.warning,
    error: styles.error,
  }[type];

  return (
    <div
      className={clsx(
        "fixed top-4 right-4 z-[9999] min-w-[240px] max-w-xs flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg text-sm animate-fade-in",
        styles.toast,
        typeClass,
        className
      )}
      role={type === "error" ? "alert" : "status"}
      aria-live="polite"
      {...rest}
    >
      <span className={styles.icon}>
        {type === "info" && "ℹ️"}
        {type === "success" && "✅"}
        {type === "warning" && "⚠️"}
        {type === "error" && "⛔"}
      </span>
      <div className="flex-1 min-w-0">{children}</div>
      {closable && (
        <button
          className="ml-2 text-gray-400 hover:text-red-500 rounded"
          aria-label="Đóng"
          onClick={onClose}
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Toast;
