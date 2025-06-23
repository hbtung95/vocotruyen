import React from "react";
import { TableGroupCellProps } from "./TableGroupCell.types";
import styles from "./themes/TableGroupCell.module.css";
import { groupIndent } from "./TableGroupCell.utils";

const ArrowIcon = ({ expanded }: { expanded?: boolean }) => (
  <span className={`${styles.arrow} ${expanded ? styles.arrowExpanded : ""}`}>▶</span>
);

const TableGroupCell: React.FC<TableGroupCellProps> = ({
  label,
  count,
  icon,
  expanded = false,
  level = 1,
  tooltip,
  highlight = false,
  bold = false,
  onToggle,
  actions,
  className = "",
}) => {
  return (
    <div
      className={[
        styles.groupCell,
        highlight ? styles.highlight : "",
        bold ? styles.bold : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ paddingLeft: 10 + groupIndent(level) }}
      title={tooltip || label}
      data-testid="table-group-cell"
      tabIndex={0}
      onClick={onToggle}
      aria-expanded={expanded}
    >
      <ArrowIcon expanded={expanded} />
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
      {typeof count === "number" && <span className={styles.count}>({count})</span>}
      {actions && <span className={styles.actions}>{actions.map((a, i) => <span key={i}>{a}</span>)}</span>}
    </div>
  );
};

export default TableGroupCell;
