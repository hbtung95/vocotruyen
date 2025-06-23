import React from "react";
import { TableBooleanCellProps } from "./TableBooleanCell.types";
import styles from "./themes/TableBooleanCell.module.css";
import { getBoolColor } from "./TableBooleanCell.utils";
import { useBoolToggle } from "./TableBooleanCell.hooks";

const TRUE_ICON = <span className={styles.icon}>✔️</span>;
const FALSE_ICON = <span className={styles.icon}>❌</span>;

const TableBooleanCell: React.FC<TableBooleanCellProps> = ({
  value,
  trueLabel = "Đạt",
  falseLabel = "Không đạt",
  trueIcon = TRUE_ICON,
  falseIcon = FALSE_ICON,
  trueColor,
  falseColor,
  tooltip,
  highlight = false,
  toggleable = false,
  onToggle,
  className = "",
}) => {
  const [checked, toggle] = useBoolToggle(!!value, onToggle);

  const color = getBoolColor(checked, trueColor, falseColor);
  const label = checked ? trueLabel : falseLabel;
  const icon = checked ? trueIcon : falseIcon;

  if (value == null) return null;

  return (
    <span
      className={`
        ${styles.boolCell}
        ${checked ? styles.true : styles.false}
        ${highlight ? styles.highlight : ""}
        ${className}
      `}
      style={{ color }}
      title={tooltip || label}
      tabIndex={toggleable ? 0 : -1}
      onClick={toggleable ? toggle : undefined}
      data-testid="table-bool-cell"
    >
      {icon}
      <span className={styles.label}>{label}</span>
    </span>
  );
};

export default TableBooleanCell;
