import React from "react";
import { ListItemActionProps } from "./ListItemAction.types";
import { getActionItemClass } from "./ListItemAction.utils";
import styles from "./themes/ListItemAction.module.css";

const ListItemAction: React.FC<ListItemActionProps> = ({
  icon,
  label,
  description,
  actions,
  selected = false,
  disabled = false,
  onActionClick,
  className = "",
  tabIndex = 0,
}) => (
  <div
    className={`
      flex items-center w-full gap-3 px-4 py-2 rounded-xl transition
      ${styles.actionItemGlass}
      ${selected ? styles.selected : ""}
      ${disabled ? styles.disabled : ""}
      ${getActionItemClass(selected, disabled)}
      ${className}
    `}
    aria-selected={selected}
    aria-disabled={disabled}
    tabIndex={tabIndex}
  >
    {icon && <span className="flex-shrink-0">{icon}</span>}
    <div className="flex-1 min-w-0">
      <span className="truncate">{label}</span>
      {description && (
        <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{description}</div>
      )}
    </div>
    <div className="flex-shrink-0">
      {/* Có thể là button, menu, dropdown... */}
      {React.isValidElement(actions)
        ? React.cloneElement(actions as React.ReactElement, {
            onClick: disabled
              ? undefined
              : (e: React.MouseEvent) => {
                  e.stopPropagation();
                  if (onActionClick) onActionClick();
                  if ((actions as any).props.onClick) (actions as any).props.onClick(e);
                },
            tabIndex: 0,
          })
        : actions}
    </div>
  </div>
);

export default ListItemAction;
