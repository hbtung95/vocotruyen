import React from "react";
import { TableStatsWidgetProps } from "./TableStatsWidget.types";
import styles from "./themes/TableStatsWidget.module.css";
import { useStatsDisplay } from "./TableStatsWidget.hooks";

const TableStatsWidget: React.FC<TableStatsWidgetProps> = ({
  stats,
  loading = false,
  className = "",
}) => {
  const displayStats = useStatsDisplay(stats, loading);

  if (!stats || stats.length === 0) return null;

  return (
    <div
      className={`
        ${styles.statsWrap}
        ${loading ? styles.loading : ""}
        ${className}
      `}
      data-testid="table-stats"
    >
      {displayStats.map(stat => (
        <span key={stat.key} className={styles.statItem} title={stat.tooltip || stat.label}>
          {stat.icon && (
            <span
              className={styles.icon}
              style={stat.color ? { color: stat.color } : undefined}
            >
              {stat.icon}
            </span>
          )}
          <span className={styles.label}>{stat.label}</span>
          <span
            className={styles.value}
            style={stat.color ? { color: stat.color } : undefined}
          >
            {stat.value}
          </span>
        </span>
      ))}
    </div>
  );
};

export default TableStatsWidget;
