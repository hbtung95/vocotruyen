import React, { useState, useRef } from "react";
import { SavedViewMenuProps } from "./SavedViewMenu.types";
import styles from "./themes/SavedViewMenu.module.css";
import { getViewLabel } from "./SavedViewMenu.utils";
import { useSavedViewActions } from "./SavedViewMenu.hooks";

const SavedViewMenu: React.FC<SavedViewMenuProps> = ({
  views,
  currentId,
  onSelect,
  onAdd,
  onRename,
  onDelete,
  onDuplicate,
  onSetDefault,
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const actionHandler = useSavedViewActions(onRename, onDelete, onDuplicate, onSetDefault);

  // Đóng menu khi click ngoài
  React.useEffect(() => {
    function handle(e: MouseEvent) {
      if (open && menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [open]);

  const current = views.find(v => v.id === currentId);

  return (
    <div className={`${styles.menuWrap} ${className}`} ref={menuRef}>
      <button className={styles.menuBtn} onClick={() => setOpen(v => !v)} type="button" aria-haspopup="listbox" aria-expanded={open}>
        {current?.icon}
        <span>{getViewLabel(current || views[0] || { name: "Chọn view" })}</span>
        <span style={{ fontSize: "1em" }}>▼</span>
      </button>
      {open && (
        <div className={styles.menuPopup} role="listbox">
          {views.map(v => (
            <div
              key={v.id}
              className={`${styles.viewItem} ${currentId === v.id ? "selected" : ""}`}
              onClick={() => { onSelect(v.id); setOpen(false); }}
              role="option"
              aria-selected={currentId === v.id}
              tabIndex={0}
            >
              <span>
                {v.icon && <span className={styles.icon}>{v.icon}</span>}
                {getViewLabel(v)}
              </span>
              <span>
                {onSetDefault && !v.isDefault && (
                  <button className={styles.actionBtn} title="Đặt mặc định" onClick={e => { e.stopPropagation(); actionHandler("setDefault", v.id); }}>⭐</button>
                )}
                {onRename && (
                  <button className={styles.actionBtn} title="Đổi tên" onClick={e => { e.stopPropagation(); actionHandler("rename", v.id); }}>✏️</button>
                )}
                {onDuplicate && (
                  <button className={styles.actionBtn} title="Nhân bản" onClick={e => { e.stopPropagation(); actionHandler("duplicate", v.id); }}>⧉</button>
                )}
                {onDelete && !v.isDefault && (
                  <button className={styles.actionBtn} title="Xóa view này" onClick={e => { e.stopPropagation(); actionHandler("delete", v.id); }}>🗑</button>
                )}
              </span>
            </div>
          ))}
          {onAdd && (
            <button className={styles.addBtn} type="button" onClick={() => { onAdd(); setOpen(false); }}>
              + Tạo view mới
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SavedViewMenu;
