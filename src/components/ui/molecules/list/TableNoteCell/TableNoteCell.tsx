import React from "react";
import { TableNoteCellProps } from "./TableNoteCell.types";
import styles from "./themes/TableNoteCell.module.css";
import { truncateNote } from "./TableNoteCell.utils";
import { useCopy } from "./TableNoteCell.hooks";

// Simple markdown renderer (bold/italic/line-break)
// Nếu muốn tích hợp lib markdown, thay đoạn này
function simpleMarkdown(text: string) {
  if (!text) return "";
  return text
    .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
    .replace(/\*(.+?)\*/g, "<i>$1</i>")
    .replace(/\n/g, "<br/>");
}

const TableNoteCell: React.FC<TableNoteCellProps> = ({
  note,
  maxLength = 120,
  multiLine = true,
  markdown = false,
  tooltip,
  icon,
  label,
  highlight = false,
  error = false,
  copyable = false,
  onCopy,
  bold = false,
  className = "",
}) => {
  const [copied, copy] = useCopy();
  if (!note) return null;
  const showNote =
    note.length > maxLength ? truncateNote(note, maxLength) : note;
  const cellClass = [
    styles.noteCell,
    bold ? styles.bold : "",
    error ? styles.error : "",
    highlight ? styles.highlight : "",
    multiLine ? styles.multiLine : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={cellClass}
      title={tooltip || note}
      data-testid="table-note-cell"
      onClick={copyable ? () => { copy(note); onCopy?.(note); } : undefined}
      tabIndex={0}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span
        dangerouslySetInnerHTML={
          markdown
            ? { __html: simpleMarkdown(showNote) }
            : undefined
        }
      >
        {!markdown ? showNote : undefined}
      </span>
      {label && <span className={styles.label}>{label}</span>}
      {copyable && <span className={styles.copied}>{copied ? "✓ Copied!" : "📋"}</span>}
    </span>
  );
};

export default TableNoteCell;
