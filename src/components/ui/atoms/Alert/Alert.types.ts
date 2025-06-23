/**
 * Props cho atom Alert
 */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Nội dung alert */
  children: React.ReactNode;
  /** Loại alert */
  type?: "info" | "success" | "warning" | "error";
  /** Tiêu đề alert (tùy chọn) */
  title?: React.ReactNode;
  /** Có nút đóng không? */
  closable?: boolean;
  /** Sự kiện đóng */
  onClose?: () => void;
  /** Custom class */
  className?: string;
}
