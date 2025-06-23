import React from "react";
import { TableTagColumnProps } from "./TableTagColumn.types";
import styles from "./themes/TableTagColumn.module.css";
import { useTagOptions } from "./TableTagColumn.hooks";

const TableTagColumn: React.FC<TableTagColumnProps> = ({
  tags,
  options,
  multi = true,
  max = 3,
  className = "",
}) => {
  const tagList = useTagOptions({ tags, options });

  if (!tagList.length) return null;

  const showTags = tagList.slice(0, max);
  const hiddenCount = tagList.length - showTags.length;

  return (
    <div className={`${styles.tagCell} ${className}`} data-testid="table-tag-cell">
      {showTags.map(t => (
        <span
          key={t.value}
          className={styles.tag}
          style={t.color ? { background: t.color, color: "#fff" } : undefined}
          title={t.tooltip || t.label}
          aria-label={t.tooltip}
        >
          {t.icon && <span className={styles.icon}>{t.icon}</span>}
          {t.label}
        </span>
      ))}
      {hiddenCount > 0 && (
        <span className={`${styles.tag} ${styles.more}`}>+{hiddenCount}</span>
      )}
    </div>
  );
};

export default TableTagColumn;
