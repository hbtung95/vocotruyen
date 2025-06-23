import React from "react";
import { TableAttachmentCellProps } from "./TableAttachmentCell.types";
import styles from "./themes/TableAttachmentCell.module.css";
import { getFileIcon, formatSize } from "./TableAttachmentCell.utils";
import { useVisibleAttachments } from "./TableAttachmentCell.hooks";

const TableAttachmentCell: React.FC<TableAttachmentCellProps> = ({
  attachments,
  max = 2,
  showSize = true,
  showIcon = true,
  highlight = false,
  disabled = false,
  className = "",
}) => {
  const visible = useVisibleAttachments(attachments, max);
  if (!visible.length) return null;
  const hiddenCount = attachments.length - visible.length;

  return (
    <span
      className={`${styles.attachmentCell} ${highlight ? styles.highlight : ""} ${disabled ? styles.disabled : ""} ${className}`}
      data-testid="table-attachment-cell"
    >
      {visible.map((a, idx) => (
        <span
          key={a.key}
          className={`${styles.attachBox} ${a.error ? styles.error : ""} ${a.disabled ? styles.disabled : ""}`}
          title={a.tooltip || a.name}
          tabIndex={a.onPreview && !a.disabled ? 0 : -1}
          onClick={a.onPreview && !a.disabled ? e => { e.stopPropagation(); a.onPreview!(); } : undefined}
        >
          {showIcon && (a.icon || getFileIcon(a.type))}
          <span className={styles.name}>{a.name}</span>
          {showSize && a.size && <span className={styles.size}>{formatSize(a.size)}</span>}
          {a.uploading && <span className={styles.uploading}>Đang tải lên...</span>}
          {a.error && <span className={styles.error}>Lỗi</span>}
          {a.onDownload && !a.disabled && (
            <button className={styles.actionBtn} onClick={e => { e.stopPropagation(); a.onDownload!(); }} title="Tải xuống">
              ⬇️
            </button>
          )}
          {a.onCopyUrl && !a.disabled && (
            <button className={styles.actionBtn} onClick={e => { e.stopPropagation(); a.onCopyUrl!(); }} title="Copy link">
              📋
            </button>
          )}
        </span>
      ))}
      {hiddenCount > 0 && (
        <span className={styles.more}>+{hiddenCount}</span>
      )}
    </span>
  );
};

export default TableAttachmentCell;
