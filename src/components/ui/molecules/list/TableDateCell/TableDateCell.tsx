import React from "react";
import { TableDateCellProps } from "./TableDateCell.types";
import styles from "./themes/TableDateCell.module.css";
import { formatDate, isOverdue } from "./TableDateCell.utils";
import { useDisplayMode } from "./TableDateCell.hooks";

const CalendarIcon = <span className={styles.icon}>📅</span>;

const TableDateCell: React.FC<TableDateCellProps> = ({
  value,
  mode = "date",
  format,
  icon = CalendarIcon,
  highlight = false,
  tooltip,
  overdue,
  className = "",
  locale,
}) => {
  const [displayMode, toggleMode] = useDisplayMode(mode);
  const displayOverdue = typeof overdue === "boolean" ? overdue : isOverdue(value);
  const display = formatDate(value, displayMode, format, locale);

  if (!value) return null;

  return (
    <span
      className={`
        ${styles.dateCell}
        ${highlight ? styles.highlight : ""}
        ${displayOverdue ? styles.overdue : ""}
        ${className}
      `}
      title={tooltip || display}
      tabIndex={0}
      onClick={toggleMode}
      aria-label={tooltip}
      data-testid="table-date-cell"
    >
      {icon}
      {display}
      {tooltip && <span className={styles.tooltip}>{tooltip}</span>}
    </span>
  );
};

export default TableDateCell;
