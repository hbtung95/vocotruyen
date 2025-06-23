import React from "react";
import { TableColorCellProps } from "./TableColorCell.types";
import styles from "./themes/TableColorCell.module.css";
import { getLabel } from "./TableColorCell.utils";
import { useCopy } from "./TableColorCell.hooks";

const TableColorCell: React.FC<TableColorCellProps> = ({
  value,
  label,
  icon,
  tooltip,
  copyable = false,
  onCopy,
  highlight = false,
  bold = false,
  className = "",
}) => {
  const [copied, copy] = useCopy();
  if (!value) return null;
  const showLabel = getLabel(value, label);
  const cellClass = [
    styles.colorCell,
    bold ? styles.bold : "",
    highlight ? styles.highlight : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={cellClass}
      title={tooltip || showLabel}
      data-testid="table-color-cell"
      onClick={copyable ? () => { copy(value); onCopy?.(value); } : undefined}
      tabIndex={0}
    >
      <span className={styles.swatch} style={{ background: value }} />
      {icon && <span>{icon}</span>}
      <span className={styles.label}>{showLabel}</span>
      {copyable && <span className={styles.copied}>{copied ? "✓ Copied!" : "🎨"}</span>}
    </span>
  );
};

export default TableColorCell;
