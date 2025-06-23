import React from "react";
import { TableActionCellProps, ActionCellItem } from "./TableActionCell.types";
import styles from "./themes/TableActionCell.module.css";
import { visibleActions } from "./TableActionCell.utils";
import { useMenu } from "./TableActionCell.hooks";

const MoreIcon = <span className={styles.menuIcon}>⋯</span>;

const TableActionCell: React.FC<TableActionCellProps> = ({
  actions,
  max = 2,
  menuLabel = "Khác",
  menuIcon = MoreIcon,
  menuTooltip = "Thao tác khác",
  highlight = false,
  disabled = false,
  className = "",
}) => {
  const { main, more } = visibleActions(actions, max);
  const menu = useMenu();

  // Action button click (handle confirm nếu có)
  const handleClick = (a: ActionCellItem) => {
    if (a.confirm) {
      // eslint-disable-next-line no-restricted-globals
      if (!window.confirm(a.confirm)) return;
    }
    a.onClick?.();
  };

  if (!main.length && !more.length) return null;

  return (
    <span
      className={`${styles.actionCell} ${highlight ? styles.highlight : ""} ${disabled ? styles.disabled : ""} ${className}`}
      data-testid="table-action-cell"
    >
      {main.map(a => (
        <button
          key={a.key}
          className={`${styles.actionBtn} ${a.disabled ? "disabled" : ""}`}
          style={a.color ? { color: a.color } : undefined}
          title={a.tooltip || a.label}
          disabled={a.disabled || disabled}
          onClick={e => {
            e.stopPropagation();
            handleClick(a);
          }}
          tabIndex={a.onClick && !a.disabled && !disabled ? 0 : -1}
        >
          {a.icon && <span className={styles.menuIcon}>{a.icon}</span>}
          {a.label}
        </button>
      ))}
      {!!more.length && (
        <span className={styles.menuWrap}>
          <button
            className={styles.actionBtn}
            title={menuTooltip}
            type="button"
            onClick={e => {
              e.stopPropagation();
              menu.openMenu();
            }}
            tabIndex={0}
          >
            {menuIcon}
            <span className={styles.menuLabel}>{menuLabel}</span>
          </button>
          {menu.open && (
            <div className={styles.menuPopup} tabIndex={-1} onBlur={menu.closeMenu}>
              {more.map(a => (
                <button
                  key={a.key}
                  className={`${styles.menuItem} ${a.disabled ? "disabled" : ""}`}
                  style={a.color ? { color: a.color } : undefined}
                  title={a.tooltip || a.label}
                  disabled={a.disabled || disabled}
                  onClick={e => {
                    e.stopPropagation();
                    menu.closeMenu();
                    handleClick(a);
                  }}
                  tabIndex={a.onClick && !a.disabled && !disabled ? 0 : -1}
                >
                  {a.icon && <span className={styles.menuIcon}>{a.icon}</span>}
                  {a.label}
                </button>
              ))}
            </div>
          )}
        </span>
      )}
    </span>
  );
};

export default TableActionCell;
