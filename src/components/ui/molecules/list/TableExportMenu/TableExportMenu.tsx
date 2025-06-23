import React, { useState, useRef } from "react";
import { TableExportMenuProps, ExportFormat } from "./TableExportMenu.types";
import styles from "./themes/TableExportMenu.module.css";
import { getExportLabel } from "./TableExportMenu.utils";
import { useDropdownClose } from "./TableExportMenu.hooks";

const defaultFormats = [
  { key: "csv", label: "CSV (.csv)", icon: <span>📄</span> },
  { key: "xlsx", label: "Excel (.xlsx)", icon: <span>📊</span> },
  { key: "json", label: "JSON (.json)", icon: <span>🧾</span> },
  { key: "pdf", label: "PDF (.pdf)", icon: <span>📑</span> },
];

const TableExportMenu: React.FC<TableExportMenuProps> = ({
  onExport,
  formats = defaultFormats,
  withSelection = false,
  disabled = false,
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const [exportSelection, setExportSelection] = useState(false); // chỉ export các dòng đã chọn
  const wrapRef = useRef<HTMLDivElement>(null);

  useDropdownClose(wrapRef, () => setOpen(false));

  const handleExport = (fmt: ExportFormat) => {
    setOpen(false);
    onExport(fmt, withSelection ? { selected: exportSelection } : undefined);
  };

  return (
    <div className={`${styles.exportWrap} ${className}`} ref={wrapRef}>
      <button
        className={styles.exportBtn}
        disabled={disabled}
        onClick={() => setOpen(v => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        type="button"
        title="Xuất dữ liệu"
      >
        <span>Xuất file</span>
        <span style={{ fontSize: "1em" }}>▼</span>
      </button>
      {open && (
        <div className={styles.menuPopup} role="menu">
          {withSelection && (
            <div className={styles.menuItem}>
              <input
                type="checkbox"
                className={styles.selectCheckbox}
                checked={exportSelection}
                onChange={e => setExportSelection(e.target.checked)}
                id="exportSelection"
              />
              <label htmlFor="exportSelection" style={{ cursor: "pointer" }}>
                Chỉ xuất dòng đã chọn
              </label>
            </div>
          )}
          {formats.map(fmt => (
            <div
              key={fmt.key}
              className={styles.menuItem}
              role="menuitem"
              onClick={() => handleExport(fmt.key as ExportFormat)}
              tabIndex={0}
            >
              {fmt.icon}
              <span>{fmt.label || getExportLabel(fmt.key as ExportFormat)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TableExportMenu;
