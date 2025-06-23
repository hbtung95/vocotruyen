/**
 * Props cho atom Backdrop
 */
export interface BackdropProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Có hiển thị hay không (có thể dùng cho animation) */
  open?: boolean;
  /** Màu nền overlay */
  color?: string;
  /** Độ mờ (opacity) */
  opacity?: number;
  /** Có hiệu ứng glass không? */
  glass?: boolean;
  /** Click để đóng? */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /** Custom class */
  className?: string;
  /** Ưu tiên z-index */
  zIndex?: number;
}
