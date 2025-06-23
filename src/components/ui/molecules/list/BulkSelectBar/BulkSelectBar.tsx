import React from "react";
import { BulkSelectBarProps } from "./BulkSelectBar.types";
import { formatSelected } from "./BulkSelectBar.utils";
import { useBulkActionConfirm } from "./BulkSelectBar.hooks";
import styles from "./themes/BulkSelectBar.module.css";

const BulkSelectBar: React.FC<BulkSelectBarProps> = ({
  selectedCount,
  totalCount,
  onClearSelection,
  actions,
  className = "",
}) => {
  const handleAction = useBulkActionConfirm();

  if (selectedCount === 0) return null;

  return (
    <div className={`${styles.bulkBar} ${className}`} data-testid="bulk-select-bar">
      <span>{formatSelected(selectedCount, totalCount)}</span>
      {actions.map(action => (
        <button
          key={action.key}
          className={`${styles.actionBtn} ${action.danger ? "danger" : ""}`}
          onClick={() => handleAction(action)}
          disabled={action.disabled}
          title={action.tooltip || action.label}
          type="button"
        >
          {action.icon}
          <span className="ml-1">{action.label}</span>
        </button>
      ))}
      <button className={styles.clearBtn} onClick={onClearSelection}>Bỏ chọn</button>
    </div>
  );
};

export default BulkSelectBar;
