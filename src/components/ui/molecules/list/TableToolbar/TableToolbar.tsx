import React, { useRef } from "react";
import { TableToolbarProps } from "./TableToolbar.types";
import { getToolbarTitle } from "./TableToolbar.utils";
import styles from "./themes/TableToolbar.module.css";

const TableToolbar: React.FC<TableToolbarProps> = ({
  title,
  selectedCount = 0,
  onBulkAction,
  bulkActions,
  onRefresh,
  onAdd,
  searchPlaceholder = "Tìm kiếm...",
  onSearch,
  filterComponent,
  extraActions,
  disabled = false,
  className = "",
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={`
        flex items-center w-full gap-2 px-4 py-2 rounded-t-lg
        border-b transition sticky top-0 bg-white dark:bg-gray-950
        ${styles.toolbarGlass}
        ${className}
      `}
      aria-disabled={disabled}
    >
      {title && (
        <div className="text-lg font-semibold flex-1">
          {getToolbarTitle(title, selectedCount)}
        </div>
      )}
      {typeof onAdd === "function" && (
        <button
          className="px-2 py-1 rounded bg-primary-600 text-white text-sm font-medium mr-2"
          onClick={onAdd}
          disabled={disabled}
        >
          + Thêm mới
        </button>
      )}
      {typeof onRefresh === "function" && (
        <button
          className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-100 text-sm font-medium"
          onClick={onRefresh}
          disabled={disabled}
          title="Làm mới"
        >
          <span className="material-symbols-outlined">refresh</span>
        </button>
      )}
      {filterComponent}
      <input
        type="text"
        className="ml-2 px-2 py-1 rounded border text-sm focus:outline-accent min-w-[160px]"
        ref={inputRef}
        placeholder={searchPlaceholder}
        onChange={e => onSearch && onSearch(e.target.value)}
        disabled={disabled}
        aria-label={searchPlaceholder}
      />
      {bulkActions && selectedCount > 0 && (
        <div className="ml-2 flex items-center gap-1">
          {bulkActions}
          {onBulkAction && (
            <button
              className="ml-1 px-2 py-1 bg-red-500 text-white rounded text-xs"
              onClick={onBulkAction}
              disabled={disabled}
            >
              Xử lý hàng loạt
            </button>
          )}
        </div>
      )}
      {extraActions}
    </div>
  );
};

export default TableToolbar;
