/**
 * Props cho atom Toast
 */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Có hiển thị toast không */
  open: boolean;
  /** Nội dung */
  children: React.ReactNode;
  /** Loại toast */
  type?: "info" | "success" | "warning" | "error";
  /** Có nút đóng không? */
  closable?: boolean;
  /** Sự kiện đóng */
  onClose?: () => void;
  /** Custom class */
  className?: string;
  /** Thời gian tự động ẩn (ms, optional) */
  duration?: number;
}
