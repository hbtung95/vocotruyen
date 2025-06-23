import React from "react";
import { TableLinkCellProps } from "./TableLinkCell.types";
import styles from "./themes/TableLinkCell.module.css";
import { detectLinkType, formatDisplay } from "./TableLinkCell.utils";
import { useCopy } from "./TableLinkCell.hooks";

const ICONS: Record<string, React.ReactNode> = {
  url: <span className={styles.icon}>🔗</span>,
  email: <span className={styles.icon}>✉️</span>,
  phone: <span className={styles.icon}>📞</span>,
  resource: <span className={styles.icon}>📄</span>,
};

const TableLinkCell: React.FC<TableLinkCellProps> = ({
  value,
  type,
  icon,
  label,
  highlight = false,
  tooltip,
  invalid = false,
  copyable = false,
  onCopy,
  className = "",
}) => {
  const [copied, copy] = useCopy();

  if (!value) return null;
  const linkType = type || detectLinkType(value);
  const display = label || formatDisplay(value, linkType);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (copyable) {
      copy(value);
      onCopy?.(value);
    }
  };

  const href =
    linkType === "email"
      ? value.startsWith("mailto:") ? value : `mailto:${value}`
      : linkType === "phone"
      ? value.startsWith("tel:") ? value : `tel:${value}`
      : value;

  return (
    <span
      className={`
        ${styles.linkCell}
        ${highlight ? styles.highlight : ""}
        ${invalid ? styles.invalid : ""}
        ${className}
      `}
      title={tooltip || value}
      tabIndex={0}
      data-testid="table-link-cell"
      onClick={copyable ? handleCopy : undefined}
      style={invalid ? { pointerEvents: "none" } : undefined}
    >
      {icon || ICONS[linkType]}
      {linkType === "url" && !invalid ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          style={{ color: "inherit", textDecoration: "underline" }}
          onClick={e => e.stopPropagation()}
        >
          {display}
        </a>
      ) : (
        <span>{display}</span>
      )}
      {copyable && !invalid && (
        <span className={styles.copied}>{copied ? "✓ Copied!" : "📋"}</span>
      )}
      {tooltip && <span className={styles.tooltip}>{tooltip}</span>}
    </span>
  );
};

export default TableLinkCell;
