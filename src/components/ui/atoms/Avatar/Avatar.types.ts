/**
 * Các props của component Avatar
 */
export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Đường dẫn ảnh đại diện */
  src?: string;
  /** Kích thước (px) – small | medium | large hoặc custom số */
  size?: 'sm' | 'md' | 'lg' | number;
  /** Văn bản thay thế (dùng cho a11y & fallback) */
  alt?: string;
  /** Có viền không */
  bordered?: boolean;
  /** CSS className bổ sung */
  className?: string;
  /** Hiển thị placeholder nếu không có ảnh */
  showPlaceholder?: boolean;
}
