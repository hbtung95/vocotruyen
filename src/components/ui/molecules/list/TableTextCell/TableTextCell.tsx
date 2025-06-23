import React from "react";
import { TableTextCellProps } from "./TableTextCell.types";
import styles from "./themes/TableTextCell.module.css";
import { truncateText } from "./TableTextCell.utils";
import { useCopy } from "./TableTextCell.hooks";

const TableTextCell: React.FC<TableTextCellProps> = ({
  value,
  maxLength = 42,
  ellipsis = true,
  multiLine = false,
  rows = 3,
  highlight = false,
  tooltip,
  icon,
  label,
  copyable = false,
  onCopy,
  bold = false,
  error = false,
  className = "",
}) => {
  const [copied, copy] = useCopy();
  if (!value) return null;
  const showValue =
    ellipsis && !multiLine && value.length > maxLength
      ? truncateText(value, maxLength)
      : value;
  const cellClass = [
    styles.textCell,
    bold ? styles.bold : "",
    error ? styles.error : "",
    highlight ? styles.highlight : "",
    ellipsis && !multiLine ? styles.ellipsis : "",
    multiLine ? styles.multiLine : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <span
      className={cellClass}
      title={tooltip || value}
      data-testid="table-text-cell"
      onClick={copyable ? () => { copy(value); onCopy?.(value); } : undefined}
      tabIndex={0}
      style={multiLine ? { ["--rows" as any]: rows } : undefined}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {showValue}
      {label && <span className={styles.label}>{label}</span>}
      {copyable && <span className={styles.copied}>{copied ? "✓ Copied!" : "📋"}</span>}
    </span>
  );
};

export default TableTextCell;
