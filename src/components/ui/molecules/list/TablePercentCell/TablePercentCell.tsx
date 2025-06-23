import React from "react";
import { TablePercentCellProps } from "./TablePercentCell.types";
import styles from "./themes/TablePercentCell.module.css";
import { formatPercent } from "./TablePercentCell.utils";
import { useCopy } from "./TablePercentCell.hooks";

const TablePercentCell: React.FC<TablePercentCellProps> = ({
  value,
  fixed = 2,
  showBar = false,
  showLabel = true,
  icon,
  positiveColor = "#1f9e53",
  negativeColor = "#e94f44",
  highlight = false,
  tooltip,
  error = false,
  copyable = false,
  onCopy,
  bold = false,
  className = "",
}) => {
  const [copied, copy] = useCopy();
  if (value == null) return null;
  const s = formatPercent(value, fixed);
  const isPositive = value >= 0;
  const colorClass = error
    ? styles.error
    : isPositive
    ? styles.positive
    : styles.negative;
  const fontClass = bold ? styles.bold : "";
  const cellClass = [styles.percentCell, colorClass, fontClass, highlight ? styles.highlight : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={cellClass}
      title={tooltip || s}
      data-testid="table-percent-cell"
      onClick={copyable ? () => { copy(s); onCopy?.(value); } : undefined}
      tabIndex={0}
      style={error ? { pointerEvents: "none" } : undefined}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {showBar && (
        <span className={styles.barWrap}>
          <span
            className={`
              ${styles.bar}
              ${!isPositive ? styles.barNegative : ""}
            `}
            style={{ width: `${Math.min(Math.abs(value), 100)}%`, background: isPositive ? positiveColor : negativeColor }}
          />
        </span>
      )}
      {showLabel && <span className={styles.label}>{s}</span>}
      {copyable && !error && <span className={styles.copied}>{copied ? "✓ Copied!" : "📋"}</span>}
    </span>
  );
};

export default TablePercentCell;
