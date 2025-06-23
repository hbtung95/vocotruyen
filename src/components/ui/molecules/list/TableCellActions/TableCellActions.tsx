import React from "react";
import { TableCellActionsProps } from "./TableCellActions.types";
import styles from "./themes/TableCellActions.module.css";
import { useActionConfirm } from "./TableCellActions.hooks";

const TableCellActions: React.FC<TableCellActionsProps> = ({
  actions,
  orientation = "horizontal",
  compact = false,
  className = "",
}) => {
  const handleAction = useActionConfirm();
  if (!actions || actions.length === 0) return null;

  return (
    <div
      className={`
        ${styles.actionCell}
        ${orientation === "vertical" ? "flex-col" : "flex-row"}
        ${compact ? styles.compact : ""}
        ${className}
      `}
    >
      {actions.map(action => (
        <button
          key={action.key}
          className={`
            ${styles.actionBtn}
            ${action.danger ? "danger" : ""}
          `}
          title={action.tooltip || action.label}
          onClick={() => handleAction(action)}
          disabled={action.disabled}
          aria-label={action.label}
          type="button"
        >
          {action.icon}
          <span className="ml-1">{action.label}</span>
        </button>
      ))}
    </div>
  );
};

export default TableCellActions;
