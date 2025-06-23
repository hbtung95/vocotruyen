/**
 * Props cho atom Overlay
 */
export interface OverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Có hiển thị không */
  open?: boolean;
  /** Nội dung overlay (children nằm trên overlay) */
  children?: React.ReactNode;
  /** Màu nền overlay */
  color?: string;
  /** Độ mờ (opacity) */
  opacity?: number;
  /** Glass effect? */
  glass?: boolean;
  /** Đóng khi click overlay */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /** Custom class */
  className?: string;
  /** Z-index */
  zIndex?: number;
  /** Center nội dung children? */
  center?: boolean;
}
