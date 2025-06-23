import React from "react";
import { DataTableRowProps } from "./DataTableRow.types";
import { getRowClass } from "./DataTableRow.utils";
import styles from "./themes/DataTableRow.module.css";

const DataTableRow: React.FC<DataTableRowProps> = ({
  cells,
  selected = false,
  checked = false,
  onCheck,
  onRowClick,
  highlight = false,
  disabled = false,
  className = "",
  rowId,
  actions,
}) => (
  <tr
    className={`
      ${styles.dataTableRow}
      ${selected ? styles.selected : ""}
      ${highlight ? styles.highlight : ""}
      ${disabled ? styles.disabled : ""}
      ${getRowClass(selected, highlight, disabled)}
      ${className}
    `}
    aria-selected={selected}
    aria-disabled={disabled}
    data-rowid={rowId}
    tabIndex={0}
    onClick={disabled ? undefined : onRowClick}
  >
    {typeof onCheck === "function" && (
      <td>
        <input
          type="checkbox"
          checked={checked}
          onChange={e => !disabled && onCheck(e.target.checked)}
          aria-label="Chọn dòng này"
          disabled={disabled}
        />
      </td>
    )}
    {cells.map((cell, idx) => (
      <td
        key={cell.key || idx}
        align={cell.align || "left"}
        style={cell.width ? { width: cell.width } : undefined}
        className={cell.editable ? "cursor-pointer underline" : ""}
        onClick={cell.editable && cell.onEdit ? (e) => { e.stopPropagation(); cell.onEdit!(cell.content); } : undefined}
      >
        {cell.content}
      </td>
    ))}
    {actions && <td>{actions}</td>}
  </tr>
);

export default DataTableRow;
