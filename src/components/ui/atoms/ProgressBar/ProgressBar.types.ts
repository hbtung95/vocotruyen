/**
 * Props cho atom ProgressBar
 */
export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Giá trị phần trăm (0–100) */
  value?: number;
  /** Hiển thị label phần trăm? */
  showLabel?: boolean;
  /** Màu/variant: accent/success/error/warning */
  color?: "accent" | "success" | "error" | "warning";
  /** Trạng thái loading vô hạn */
  indeterminate?: boolean;
  /** Height/thickness (px hoặc Tailwind) */
  thickness?: number | string;
  /** Custom class */
  className?: string;
}
