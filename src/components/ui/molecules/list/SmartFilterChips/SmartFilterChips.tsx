import React from "react";
import { SmartFilterChipsProps } from "./SmartFilterChips.types";
import { useDisplayChips } from "./SmartFilterChips.hooks";
import { getChipText } from "./SmartFilterChips.utils";
import styles from "./themes/SmartFilterChips.module.css";

const SmartFilterChips: React.FC<SmartFilterChipsProps> = ({
  chips,
  onRemove,
  onClearAll,
  className = "",
}) => {
  const chipsList = useDisplayChips(chips);
  if (!chipsList.length) return null;

  return (
    <div className={`${styles.chipBar} ${className}`} data-testid="filter-chips">
      {chipsList.map(chip => (
        <span key={chip.key} className={styles.chip}>
          {getChipText(chip)}
          <button
            className={styles.closeBtn}
            title="Xóa lọc này"
            aria-label={`Xóa lọc ${chip.label}`}
            onClick={() => onRemove(chip.key)}
            type="button"
          >
            ×
          </button>
        </span>
      ))}
      {onClearAll && (
        <button
          className={styles.clearAllBtn}
          onClick={onClearAll}
          type="button"
        >
          Xóa tất cả
        </button>
      )}
    </div>
  );
};

export default SmartFilterChips;
