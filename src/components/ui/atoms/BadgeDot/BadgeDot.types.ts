/**
 * Props cho atom BadgeDot
 */
export interface BadgeDotProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Số lượng (nếu có), mặc định là chấm tròn */
  count?: number;
  /** Giới hạn số lượng hiển thị (vd 99+) */
  max?: number;
  /** Màu trạng thái (accent, error, warning, info, neutral, success) */
  status?: "accent" | "error" | "warning" | "info" | "neutral" | "success";
  /** Kích thước (px) */
  size?: number;
  /** Có hiển thị viền không */
  outlined?: boolean;
  /** A11y label */
  label?: string;
  /** Custom class */
  className?: string;
}
