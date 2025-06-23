import React from "react";
import { TableRowDetailCellProps } from "./TableRowDetailCell.types";
import styles from "./themes/TableRowDetailCell.module.css";
import { detailIndent } from "./TableRowDetailCell.utils";

const TableRowDetailCell: React.FC<TableRowDetailCellProps> = ({
  open = true,
  children,
  loading = false,
  error = false,
  padding,
  sticky = false,
  highlight = false,
  className = "",
  actions,
  onClose,
}) => {
  if (!open) return null;
  return (
    <div
      className={[
        styles.detailCellRow,
        sticky ? styles.sticky : "",
        highlight ? styles.highlight : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ paddingLeft: detailIndent(padding) }}
      data-testid="table-row-detail-cell"
    >
      <div className={styles.detailPanel}>
        {loading && <span className={styles.loading}>Đang tải...</span>}
        {error && <span className={styles.error}>Có lỗi dữ liệu</span>}
        {!loading && !error && children}
      </div>
      {(actions?.length || onClose) && (
        <div className={styles.actions}>
          {actions}
          {onClose && (
            <button
              className={styles.closeBtn}
              onClick={onClose}
              title="Đóng chi tiết"
              tabIndex={0}
            >
              ✖️
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default TableRowDetailCell;
