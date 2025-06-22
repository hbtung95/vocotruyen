/**
 * Props cho atom Tag
 */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Nội dung tag */
  children: React.ReactNode;
  /** Màu/status: accent/success/error/warning/info... */
  color?: "accent" | "success" | "error" | "warning" | "info";
  /** Có icon trái không? */
  leftIcon?: React.ReactNode;
  /** Có icon phải không? */
  rightIcon?: React.ReactNode;
  /** Có thể xoá không */
  closable?: boolean;
  /** Sự kiện xoá */
  onClose?: () => void;
  /** Custom class */
  className?: string;
}
