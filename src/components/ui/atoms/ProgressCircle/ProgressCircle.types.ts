/**
 * Props cho atom ProgressCircle
 */
export interface ProgressCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tỉ lệ % (0–100) */
  value: number;
  /** Kích thước px (default 40) */
  size?: number;
  /** Độ dày stroke */
  thickness?: number;
  /** Màu chủ đạo */
  color?: string;
  /** Hiện label số %? */
  showLabel?: boolean;
  /** Custom class */
  className?: string;
}
