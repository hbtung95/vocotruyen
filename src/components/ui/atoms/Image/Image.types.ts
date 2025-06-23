/**
 * Props cho atom Image
 */
export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Src ảnh */
  src: string;
  /** Alt mô tả (a11y, bắt buộc) */
  alt: string;
  /** Hiệu ứng glass */
  glass?: boolean;
  /** Tối ưu lazy load */
  lazy?: boolean;
  /** Placeholder (màu, icon, base64...) */
  placeholder?: React.ReactNode;
  /** Fallback khi lỗi */
  fallback?: React.ReactNode;
  /** Custom class */
  className?: string;
}
