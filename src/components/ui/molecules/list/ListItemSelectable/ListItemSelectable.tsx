import React from "react";
import { ListItemSelectableProps } from "./ListItemSelectable.types";
import styles from "./themes/ListItemSelectable.module.css";

const ListItemSelectable: React.FC<ListItemSelectableProps> = ({
  icon,
  label,
  description,
  checked = false,
  disabled = false,
  actions,
  onChange,
  className = "",
  tabIndex = 0,
  checkboxAriaLabel = "Chọn mục này",
}) => (
  <label
    className={`
      flex items-center w-full gap-3 px-4 py-2 rounded-xl cursor-pointer transition
      text-left outline-none focus-within:ring-2 focus-within:ring-accent
      ${checked ? "bg-primary-50 dark:bg-primary-900" : "hover:bg-gray-100 dark:hover:bg-gray-800"}
      ${disabled ? "opacity-50 pointer-events-none" : ""}
      ${styles.selectable}
      ${className}
    `}
    tabIndex={tabIndex}
    aria-disabled={disabled}
  >
    <input
      type="checkbox"
      className={`mr-2 accent-primary-500 ${styles.checkbox}`}
      checked={checked}
      disabled={disabled}
      aria-label={checkboxAriaLabel}
      onChange={e => !disabled && onChange?.(e.target.checked)}
      tabIndex={-1}
    />
    {icon && <span className="flex-shrink-0">{icon}</span>}
    <div className="flex-1 min-w-0">
      <span className="truncate">{label}</span>
      {description && (
        <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{description}</div>
      )}
    </div>
    {actions && <div className="flex-shrink-0">{actions}</div>}
  </label>
);

export default ListItemSelectable;
