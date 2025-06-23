import React from "react";
import { TableRatingCellProps } from "./TableRatingCell.types";
import styles from "./themes/TableRatingCell.module.css";
import { getStars } from "./TableRatingCell.utils";
import { useRating } from "./TableRatingCell.hooks";

const StarIcon = <span className={styles.star}>★</span>;
const InactiveStar = <span className={`${styles.star} ${styles.inactive}`}>★</span>;

const TableRatingCell: React.FC<TableRatingCellProps> = ({
  value,
  max = 5,
  icon = StarIcon,
  activeColor = "#ffd300",
  inactiveColor = "#d4d6e2",
  showValue = false,
  disabled = false,
  tooltip,
  bold = false,
  highlight = false,
  className = "",
}) => {
  const rating = useRating(value, max);

  if (value == null) return null;

  return (
    <span
      className={`
        ${styles.ratingCell}
        ${bold ? styles.bold : ""}
        ${highlight ? styles.highlight : ""}
        ${disabled ? styles.disabled : ""}
        ${className}
      `}
      title={tooltip || `${rating}/${max}`}
      data-testid="table-rating-cell"
    >
      {getStars(rating, max).map((filled, i) =>
        filled ? (
          <span
            key={i}
            style={{ color: activeColor }}
            className={styles.star}
          >
            {icon}
          </span>
        ) : (
          <span
            key={i}
            style={{ color: inactiveColor }}
            className={`${styles.star} ${styles.inactive}`}
          >
            {icon}
          </span>
        )
      )}
      {showValue && (
        <span className={styles.value}>
          {value?.toFixed(1) ?? 0}/{max}
        </span>
      )}
    </span>
  );
};

export default TableRatingCell;
