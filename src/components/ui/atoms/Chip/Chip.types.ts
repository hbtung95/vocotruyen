/**
 * Props cho atom Chip
 */
export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Nội dung chip */
  children: React.ReactNode;
  /** Màu sắc (accent, success, error, info, warning, neutral) */
  color?: "accent" | "success" | "error" | "info" | "warning" | "neutral";
  /** Có thể đóng/xoá không? */
  closable?: boolean;
  /** Sự kiện đóng */
  onClose?: () => void;
  /** Icon trái */
  iconLeft?: React.ReactNode;
  /** Icon phải */
  iconRight?: React.ReactNode;
  /** Kích thước (sm, md, lg) */
  size?: "sm" | "md" | "lg";
  /** Custom class */
  className?: string;
}
