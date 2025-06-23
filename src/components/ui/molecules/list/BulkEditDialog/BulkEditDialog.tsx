import React from "react";
import { BulkEditDialogProps } from "./BulkEditDialog.types";
import styles from "./themes/BulkEditDialog.module.css";
import { useBulkEditForm } from "./BulkEditDialog.hooks";

const BulkEditDialog: React.FC<BulkEditDialogProps> = ({
  open,
  onClose,
  fields,
  onSubmit,
  title = "Chỉnh sửa hàng loạt",
  loading = false,
  className = "",
}) => {
  const { values, handleChange, handleSubmit, setValues } = useBulkEditForm(fields, onSubmit);

  React.useEffect(() => {
    if (open) setValues({});
    // eslint-disable-next-line
  }, [open]);

  if (!open) return null;

  return (
    <div className={styles.dialogBackdrop} data-testid="bulk-edit-dialog">
      <div className={`${styles.dialogCard} ${className}`} role="dialog" aria-modal="true">
        <div className={styles.dialogTitle}>{title}</div>
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {fields.map(field => (
            <div key={field.key} className={styles.formRow}>
              <label className="text-sm font-medium mb-1">{field.label}</label>
              {field.type === "text" && (
                <input
                  type="text"
                  className="border rounded px-2 py-1 w-full"
                  value={values[field.key] || ""}
                  onChange={e => handleChange(field.key, e.target.value)}
                  disabled={loading}
                />
              )}
              {field.type === "number" && (
                <input
                  type="number"
                  className="border rounded px-2 py-1 w-full"
                  value={values[field.key] || ""}
                  onChange={e => handleChange(field.key, Number(e.target.value))}
                  disabled={loading}
                />
              )}
              {field.type === "select" && field.options && (
                <select
                  className="border rounded px-2 py-1 w-full"
                  value={values[field.key] || ""}
                  onChange={e => handleChange(field.key, e.target.value)}
                  disabled={loading}
                >
                  <option value="">--Chọn--</option>
                  {field.options.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              )}
              {field.type === "checkbox" && (
                <input
                  type="checkbox"
                  checked={!!values[field.key]}
                  onChange={e => handleChange(field.key, e.target.checked)}
                  disabled={loading}
                />
              )}
              {field.type === "custom" && field.render}
            </div>
          ))}
          <div className={styles.btnGroup}>
            <button
              type="button"
              className="px-3 py-1 bg-gray-200 rounded"
              onClick={onClose}
              disabled={loading}
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-4 py-1 bg-primary-600 text-white rounded"
              disabled={loading}
            >
              {loading ? "Đang lưu..." : "Lưu thay đổi"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BulkEditDialog;
