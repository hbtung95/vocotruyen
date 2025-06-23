import React from "react";
import type { TableCellProps } from "./TableCell.types";
import styles from "./themes/TableCellLight.module.css";
import clsx from "clsx";

/**
 * TableCell – Atom cell cho table/grid, hỗ trợ variant, align, sort, header...
 */
export const TableCell: React.FC<TableCellProps> = ({
  children,
  variant = "text",
  align = "left",
  size = "md",
  header = false,
  sortable = false,
  sorted = false,
  sortDirection,
  className,
  ...rest
}) => {
  const Tag = header ? "th" : "td";
  const alignClass = {
    left: styles.left,
    center: styles.center,
    right: styles.right,
  }[align] || styles.left;
  const sizeClass = {
    sm: styles.sm,
    md: styles.md,
    lg: styles.lg,
  }[size] || styles.md;
  const varClass = styles[variant] || styles.text;

  return React.createElement(
    Tag,
    {
      className: clsx(
        "px-3 py-2 whitespace-nowrap",
        styles.cell,
        alignClass,
        sizeClass,
        varClass,
        header && styles.header,
        sortable && styles.sortable,
        sorted && styles.sorted,
        className
      ),
      scope: header ? "col" : undefined,
      ...rest,
    },
    <>
      <span className="flex items-center gap-1">
        {children}
        {sortable && header && (
          <span className={styles.sortIcon} aria-hidden="true">
            {sorted
              ? sortDirection === "asc"
                ? "▲"
                : "▼"
              : "⇅"}
          </span>
        )}
      </span>
    </>
  );
};

export default TableCell;
