import React from "react";
import { TableColumnSettingsProps } from "./TableColumnSettings.types";
import { useColumnSettings } from "./TableColumnSettings.hooks";
import styles from "./themes/TableColumnSettings.module.css";
import { arrayMove } from "./TableColumnSettings.utils";

const TableColumnSettings: React.FC<TableColumnSettingsProps> = ({
  columns,
  onChange,
  allowReorder = true,
  allowResize = true,
  className = "",
}) => {
  const { localCols, handleReorder, handleToggle } = useColumnSettings(columns, onChange);

  // Xử lý resize (width input)
  const handleResize = (idx: number, width: string) => {
    const next = [...localCols];
    next[idx].width = width;
    onChange(next);
  };

  // Drag and drop reorder
  const onDragStart = (e: React.DragEvent, idx: number) => {
    e.dataTransfer.setData("colIdx", String(idx));
  };
  const onDrop = (e: React.DragEvent, idx: number) => {
    const from = parseInt(e.dataTransfer.getData("colIdx"));
    handleReorder(from, idx);
  };

  return (
    <div className={`${styles.columnSettingsCard} ${className}`}>
      <div className="font-semibold mb-2">Tuỳ chỉnh cột bảng</div>
      <div>
        {localCols.map((col, idx) => (
          <div
            className={styles.columnRow}
            key={col.key}
            draggable={allowReorder && !col.fixed}
            onDragStart={allowReorder && !col.fixed ? (e) => onDragStart(e, idx) : undefined}
            onDragOver={allowReorder && !col.fixed ? (e) => e.preventDefault() : undefined}
            onDrop={allowReorder && !col.fixed ? (e) => onDrop(e, idx) : undefined}
            style={{ opacity: col.visible ? 1 : 0.55 }}
          >
            {allowReorder && !col.fixed && (
              <span className={styles.dragHandle} title="Kéo để đổi thứ tự">☰</span>
            )}
            <span className="flex-1 truncate">{col.label}</span>
            <input
              type="checkbox"
              className={styles.visibleSwitch}
              checked={col.visible}
              onChange={() => handleToggle(idx)}
              aria-label={col.visible ? "Ẩn cột này" : "Hiện cột này"}
              disabled={col.fixed}
            />
            {allowResize && (
              <input
                className={styles.resizeInput}
                type="text"
                value={col.width || ""}
                placeholder="px/%"
                onChange={e => handleResize(idx, e.target.value)}
                disabled={col.fixed || !col.resizable}
                aria-label="Chiều rộng cột"
                title="Nhập chiều rộng (px hoặc %)"
              />
            )}
          </div>
        ))}
      </div>
      <div className="mt-2 text-xs text-gray-500">Kéo thả để đổi vị trí, tick để ẩn/hiện cột, nhập chiều rộng tuỳ ý.</div>
    </div>
  );
};

export default TableColumnSettings;
