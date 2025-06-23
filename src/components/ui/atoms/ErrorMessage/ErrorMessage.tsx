import React from "react";
import type { ErrorMessageProps } from "./ErrorMessage.types";
import styles from "./themes/ErrorMessageLight.module.css";
import clsx from "clsx";

/**
 * ErrorMessage – Atom hiển thị lỗi dưới input/form, a11y chuẩn
 */
export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  children,
  id,
  hideIcon = false,
  className,
  ...rest
}) => (
  <div
    className={clsx(
      "text-xs mt-1 flex items-center gap-1 text-red-600 dark:text-red-400",
      styles.error,
      className
    )}
    id={id}
    role="alert"
    aria-live="polite"
    {...rest}
  >
    {!hideIcon && (
      <span className={styles.icon} aria-hidden="true">
        &#9888;
      </span>
    )}
    <span className="min-w-0">{children}</span>
  </div>
);

export default ErrorMessage;
