import React from "react";
import { TableEmptyStateProps } from "./TableEmptyState.types";
import styles from "./themes/TableEmptyState.module.css";
import { useEmptyIcon } from "./TableEmptyState.hooks";

const TableEmptyState: React.FC<TableEmptyStateProps> = ({
  icon,
  title = "Không có dữ liệu",
  description = "Không tìm thấy dòng nào. Bạn có thể thay đổi bộ lọc, tìm kiếm lại hoặc tạo mới.",
  action,
  className = "",
}) => {
  const iconContent = useEmptyIcon(icon);
  return (
    <div className={`${styles.emptyState} ${className}`} data-testid="table-empty-state">
      <div className={styles.iconWrap}>{iconContent}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      {action && <div className={styles.actionWrap}>{action}</div>}
    </div>
  );
};

export default TableEmptyState;
