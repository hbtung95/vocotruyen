import React from "react";
import { TableQuickSummaryProps } from "./TableQuickSummary.types";
import styles from "./themes/TableQuickSummary.module.css";
import { useSummaryFields } from "./TableQuickSummary.hooks";

const TableQuickSummary: React.FC<TableQuickSummaryProps> = ({
  fields,
  loading = false,
  className = "",
}) => {
  const summary = useSummaryFields(fields, loading);
  if (!summary.length) return null;

  return (
    <div className={`${styles.summaryRow} ${loading ? styles.loading : ""} ${className}`} data-testid="table-summary">
      {summary.map(f => (
        <span
          key={f.key}
          className={`${styles.cell} ${f.align ? styles[f.align] : styles.right} ${f.className || ""}`}
          title={f.tooltip || ""}
        >
          {f.value}
        </span>
      ))}
    </div>
  );
};

export default TableQuickSummary;
