import React from "react";
import clsx from "clsx";
import type { TagProps } from "./Tag.types";
import styles from "./themes/TagLight.module.css";
import { Icon } from "../../Icon";

/**
 * Tag – Atom gắn nhãn, hỗ trợ status, icon, closable, theme.
 */
export const Tag: React.FC<TagProps> = ({
  children,
  color = "accent",
  leftIcon,
  rightIcon,
  closable = false,
  onClose,
  className,
  ...rest
}) => {
  const colorClass = {
    accent: "bg-accent/10 text-accent border-accent/40",
    success: "bg-green-100 text-green-600 border-green-300",
    error: "bg-red-100 text-red-600 border-red-300",
    warning: "bg-yellow-100 text-yellow-700 border-yellow-300",
    info: "bg-blue-100 text-blue-600 border-blue-300",
  }[color] || "bg-gray-100 text-gray-700 border-gray-300";

  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 px-3 py-0.5 rounded-xl border text-xs font-medium",
        colorClass,
        styles.tag,
        className
      )}
      {...rest}
    >
      {leftIcon && <span className="mr-1">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-1">{rightIcon}</span>}
      {closable && (
        <button
          type="button"
          className="ml-1 text-gray-400 hover:text-red-500 rounded-full focus:outline-none focus:ring-2 focus:ring-accent"
          onClick={onClose}
          aria-label="Xoá tag"
          tabIndex={0}
        >
          <Icon name="x" size={14} />
        </button>
      )}
    </span>
  );
};

export default Tag;
