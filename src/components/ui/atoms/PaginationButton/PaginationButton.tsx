import React from "react";
import type { PaginationButtonProps } from "./PaginationButton.types";
import styles from "./themes/PaginationButtonLight.module.css";
import clsx from "clsx";

/**
 * PaginationButton – Atom nút phân trang, icon hoặc số, active, disabled...
 */
export const PaginationButton: React.FC<PaginationButtonProps> = ({
  active = false,
  disabled = false,
  variant = "page",
  children,
  className,
  ...rest
}) => {
  // Icon cho prev/next/first/last/ellipsis
  const icons: Record<string, React.ReactNode> = {
    prev: <span aria-hidden="true">&lt;</span>,
    next: <span aria-hidden="true">&gt;</span>,
    first: <span aria-hidden="true">&laquo;</span>,
    last: <span aria-hidden="true">&raquo;</span>,
    ellipsis: <span aria-hidden="true">…</span>,
  };

  const content = variant !== "page" && !children ? icons[variant] : children;

  return (
    <button
      type="button"
      className={clsx(
        "min-w-[32px] h-8 px-2 mx-0.5 rounded font-medium text-sm flex items-center justify-center select-none transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        styles.button,
        active && styles.active,
        disabled && styles.disabled,
        variant !== "page" && styles.icon,
        className
      )}
      disabled={disabled}
      aria-current={active ? "page" : undefined}
      tabIndex={disabled ? -1 : 0}
      {...rest}
    >
      {content}
    </button>
  );
};

export default PaginationButton;
