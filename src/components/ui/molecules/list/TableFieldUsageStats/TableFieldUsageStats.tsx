import React from "react";
import { TableFieldUsageStatsProps } from "./TableFieldUsageStats.types";
import { getFieldFillPercent } from "./TableFieldUsageStats.utils";
import { useToggleVisible } from "./TableFieldUsageStats.hooks";
import styles from "./themes/TableFieldUsageStats.module.css";

const TableFieldUsageStats: React.FC<TableFieldUsageStatsProps> = ({
  label,
  totalRows,
  nonEmptyRows,
  filteredCount = 0,
  sortedCount = 0,
  isVisible = true,
  onToggleVisible,
  className = "",
}) => {
  const percent = getFieldFillPercent(nonEmptyRows, totalRows);
  const toggleVisible = useToggleVisible(isVisible, onToggleVisible);

  return (
    <div className={`${styles.usageCard} ${className}`}>
      <div className="flex items-center justify-between mb-1">
        <span className="font-medium">{label}</span>
        {typeof onToggleVisible === "function" && (
          <span
            className={`${styles.toggleBtn}`}
            onClick={toggleVisible}
            aria-label={isVisible ? "Ẩn cột này" : "Hiện cột này"}
            title={isVisible ? "Ẩn cột này" : "Hiện cột này"}
          >
            {isVisible ? "👁" : "🚫"}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2 text-xs mb-2">
        <span>
          Dữ liệu: <b>{nonEmptyRows}/{totalRows}</b> ({percent}%)
        </span>
        <span className="ml-auto">{isVisible ? "Hiện" : "Ẩn"}</span>
      </div>
      <div className="w-full bg-gray-200 rounded">
        <div
          className={styles.percentBar}
          style={{ width: `${percent}%` }}
          aria-label={`Đã điền ${percent}%`}
        />
      </div>
      <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
        <span>Sort: <b>{sortedCount}</b></span>
        <span>Filter: <b>{filteredCount}</b></span>
      </div>
    </div>
  );
};

export default TableFieldUsageStats;
