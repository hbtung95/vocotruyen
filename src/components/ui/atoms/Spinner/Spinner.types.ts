/**
 * Props cho atom Spinner
 */
export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Kích thước spinner (px, sm|md|lg) */
  size?: number | "sm" | "md" | "lg";
  /** Màu sắc: accent, success, error, ... */
  color?: string;
  /** Có label không */
  label?: string;
  /** Ẩn label? */
  hideLabel?: boolean;
  /** Custom class */
  className?: string;
}
