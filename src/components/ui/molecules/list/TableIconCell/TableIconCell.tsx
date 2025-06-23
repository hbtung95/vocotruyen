import React from "react";
import { TableIconCellProps } from "./TableIconCell.types";
import styles from "./themes/TableIconCell.module.css";
import { useIconItems } from "./TableIconCell.hooks";

const TableIconCell: React.FC<TableIconCellProps> = ({
  icons,
  multi = true,
  max = 3,
  highlight = false,
  disabled = false,
  className = "",
}) => {
  const iconList = useIconItems(icons, multi ? max : 1);
  if (!iconList.length) return null;
  const showIcons = iconList.slice(0, max);
  const hiddenCount = iconList.length - showIcons.length;

  return (
    <span
      className={`${styles.iconCell} ${highlight ? styles.highlight : ""} ${disabled ? styles.disabled : ""} ${className}`}
      data-testid="table-icon-cell"
    >
      {showIcons.map((item, idx) => (
        <span
          key={idx}
          className={`${styles.iconItem} ${item.disabled ? styles.disabled : ""}`}
          style={item.color ? { color: item.color } : undefined}
          title={item.tooltip}
          tabIndex={item.onClick && !item.disabled ? 0 : -1}
          onClick={item.onClick && !item.disabled ? e => { e.stopPropagation(); item.onClick!(); } : undefined}
        >
          {item.icon}
        </span>
      ))}
      {multi && hiddenCount > 0 && (
        <span className={styles.more}>+{hiddenCount}</span>
      )}
    </span>
  );
};

export default TableIconCell;
