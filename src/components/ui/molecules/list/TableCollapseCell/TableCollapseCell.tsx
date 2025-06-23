import React from "react";
import { TableCollapseCellProps } from "./TableCollapseCell.types";
import styles from "./themes/TableCollapseCell.module.css";
import { collapseIndent } from "./TableCollapseCell.utils";

const ArrowIcon = ({ expanded }: { expanded?: boolean }) => (
  <span className={`${styles.arrow} ${expanded ? styles.arrowExpanded : ""}`}>▶</span>
);

const TableCollapseCell: React.FC<TableCollapseCellProps> = ({
  expanded = false,
  onToggle,
  icon,
  tooltip,
  highlight = false,
  disabled = false,
  content,
  padding = 0,
  level = 1,
  actions,
  className = "",
}) => {
  return (
    <>
      <span
        className={[
          styles.collapseCell,
          highlight ? styles.highlight : "",
          disabled ? styles.disabled : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        style={{ paddingLeft: padding + collapseIndent(level) }}
        title={tooltip}
        tabIndex={0}
        onClick={disabled ? undefined : onToggle}
        aria-expanded={expanded}
        data-testid="table-collapse-cell"
      >
        <ArrowIcon expanded={expanded} />
        {icon && <span className={styles.icon}>{icon}</span>}
        {actions && <span className={styles.actions}>{actions.map((a, i) => <span key={i}>{a}</span>)}</span>}
      </span>
      {expanded && content && (
        <div className={styles.detailRow} style={{ paddingLeft: padding + collapseIndent(level) + 21 }}>
          {content}
        </div>
      )}
    </>
  );
};

export default TableCollapseCell;
