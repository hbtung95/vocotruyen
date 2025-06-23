/**
 * Props cho atom StatusDot
 */
export interface StatusDotProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Màu trạng thái */
  status?: "success" | "warning" | "error" | "info" | "offline" | "neutral";
  /** Tooltip/label a11y */
  label?: string;
  /** Kích thước px (default: 12) */
  size?: number;
  /** Custom class */
  className?: string;
}
