import React, { useState } from "react";
import { TableEditableCellProps } from "./TableEditableCell.types";
import styles from "./themes/TableEditableCell.module.css";
import { useEditValue } from "./TableEditableCell.hooks";

const SaveIcon = <span style={{ color: "#31ba63" }}>✔️</span>;
const CancelIcon = <span style={{ color: "#aaa" }}>✖️</span>;

const TableEditableCell: React.FC<TableEditableCellProps> = ({
  value,
  type = "text",
  options = [],
  editable = true,
  multiLine = false,
  placeholder = "",
  loading = false,
  error = false,
  tooltip,
  icon,
  label,
  highlight = false,
  onSave,
  onCancel,
  validate,
  className = "",
}) => {
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue, resetValue] = useEditValue(value ?? "");
  const [errMsg, setErrMsg] = useState<string | undefined>();

  const handleStartEdit = () => {
    if (!editable) return;
    setEditValue(value ?? "");
    setEditing(true);
  };

  const handleSave = () => {
    let msg = validate?.(editValue);
    setErrMsg(msg);
    if (!msg) {
      setEditing(false);
      onSave?.(editValue);
    }
  };

  const handleCancel = () => {
    resetValue();
    setErrMsg(undefined);
    setEditing(false);
    onCancel?.();
  };

  // Render cell value
  const renderValue = () =>
    value !== null && value !== undefined && value !== ""
      ? String(value)
      : <span style={{ color: "#aaa" }}>{placeholder}</span>;

  return (
    <span
      className={[
        styles.editCell,
        highlight ? styles.highlight : "",
        className,
      ].filter(Boolean).join(" ")}
      title={tooltip}
      data-testid="table-editable-cell"
      tabIndex={0}
      onClick={!editing && editable ? handleStartEdit : undefined}
      style={{ cursor: editable ? "pointer" : "default" }}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {!editing ? (
        <>
          {renderValue()}
          {label && <span className={styles.label}>{label}</span>}
        </>
      ) : (
        <>
          {type === "select" ? (
            <select
              className={styles.select}
              value={String(editValue)}
              onChange={e => setEditValue(e.target.value)}
              disabled={loading}
              autoFocus
            >
              {options.map(o => (
                <option key={String(o.value)} value={String(o.value)}>
                  {o.label}
                </option>
              ))}
            </select>
          ) : type === "textarea" || multiLine ? (
            <textarea
              className={styles.textarea}
              value={String(editValue)}
              onChange={e => setEditValue(e.target.value)}
              disabled={loading}
              placeholder={placeholder}
              rows={3}
              autoFocus
            />
          ) : (
            <input
              className={styles.input}
              type={type}
              value={String(editValue)}
              onChange={e => setEditValue(e.target.value)}
              disabled={loading}
              placeholder={placeholder}
              autoFocus
            />
          )}
          <button className={styles.actionBtn} type="button" onClick={handleSave} disabled={loading}>
            {SaveIcon}
          </button>
          <button className={styles.actionBtn} type="button" onClick={handleCancel} disabled={loading}>
            {CancelIcon}
          </button>
          {errMsg && <span className={styles.error}>{errMsg}</span>}
          {loading && <span className={styles.loading}>Đang lưu...</span>}
        </>
      )}
    </span>
  );
};

export default TableEditableCell;
