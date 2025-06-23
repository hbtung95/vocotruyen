import React from "react";
import { TableProgressCellProps } from "./TableProgressCell.types";
import styles from "./themes/TableProgressCell.module.css";
import { getProgressColor } from "./TableProgressCell.utils";
import { useProgressValue } from "./TableProgressCell.hooks";

const SuccessIcon = <span className={styles.icon}>✅</span>;
const ErrorIcon = <span className={styles.icon}>⚠️</span>;

const TableProgressCell: React.FC<TableProgressCellProps> = ({
  value,
  showLabel = true,
  showIcon = true,
  barType = "line",
  color,
  successColor,
  errorColor,
  error = false,
  tooltip,
  highlight = false,
  icon,
  className = "",
}) => {
  const percent = useProgressValue(value);

  const progColor = getProgressColor(percent, error, color, successColor, errorColor);

  if (value == null) return null;

  // Bar progress
  const bar = (
    <span className={styles.barWrap}>
      <span
        className={`
          ${styles.bar}
          ${error ? styles.error : percent >= 100 ? styles.success : ""}
        `}
        style={{ width: `${percent}%`, background: progColor }}
      />
    </span>
  );

  // Circle progress
  const r = 15;
  const c = 2 * Math.PI * r;
  const circle = (
    <span className={styles.circle}>
      <svg className={styles.circleSvg} width={34} height={34}>
        <circle
          className={styles.circleTrack}
          cx={17}
          cy={17}
          r={r}
          strokeWidth={4}
          fill="none"
        />
        <circle
          className={`
            ${styles.circleBar}
            ${error ? styles.errorStroke : percent >= 100 ? styles.successStroke : ""}
          `}
          cx={17}
          cy={17}
          r={r}
          strokeWidth={4}
          fill="none"
          stroke={progColor}
          strokeDasharray={c}
          strokeDashoffset={c - (percent / 100) * c}
        />
      </svg>
      <span className={styles.percentLabel}>{percent}%</span>
    </span>
  );

  return (
    <span
      className={`
        ${styles.progressCell}
        ${highlight ? styles.highlight : ""}
        ${className}
      `}
      title={tooltip || `${percent}%`}
      data-testid="table-progress-cell"
    >
      {showIcon &&
        (error ? ErrorIcon : percent >= 100 ? SuccessIcon : icon)}
      {barType === "circle" ? circle : bar}
      {showLabel && <span className={styles.label}>{percent}%</span>}
    </span>
  );
};

export default TableProgressCell;
