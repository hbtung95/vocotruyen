/**
 * Props cho atom ErrorMessage
 */
export interface ErrorMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Nội dung lỗi */
  children: React.ReactNode;
  /** Id liên kết a11y (for input aria-describedby) */
  id?: string;
  /** Có ẩn icon không */
  hideIcon?: boolean;
  /** Custom class */
  className?: string;
}
