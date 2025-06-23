import React from "react";
import { ListItemProps } from "./ListItem.types";
import { getListItemClass } from "./ListItem.utils";
import styles from "./themes/ListItem.module.css";

const ListItem: React.FC<ListItemProps> = ({
  icon,
  label,
  description,
  selected = false,
  disabled = false,
  actions,
  onClick,
  className = "",
  tabIndex = 0,
}) => (
  <button
    type="button"
    className={`
      flex items-center w-full gap-3 px-4 py-2 rounded-xl transition
      text-left outline-none focus-visible:ring-2 focus-visible:ring-accent
      ${styles.listItemGlass}
      ${selected ? styles.selected : ""}
      ${disabled ? styles.disabled : ""}
      ${getListItemClass(selected, disabled)}
      ${className}
    `}
    aria-selected={selected}
    disabled={disabled}
    onClick={onClick}
    tabIndex={tabIndex}
  >
    {icon && <span className="flex-shrink-0">{icon}</span>}
    <div className="flex-1 min-w-0">
      <span className="truncate">{label}</span>
      {description && (
        <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{description}</div>
      )}
    </div>
    {actions && <div className="flex-shrink-0">{actions}</div>}
  </button>
);

export default ListItem;
