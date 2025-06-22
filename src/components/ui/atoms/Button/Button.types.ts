/**
 * Các thuộc tính của Button component
 */
export interface ButtonProps {
  /** Nội dung hiển thị trong nút */
  children: React.ReactNode;
  /** Biến thể style của nút */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** Trạng thái vô hiệu hóa */
  disabled?: boolean;
  /** Hiển thị loading spinner */
  loading?: boolean;
  /** Callback khi click */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** className bổ sung (custom style) */
  className?: string;
  /** aria-label (nếu cần accessibility cho button chỉ có icon) */
  'aria-label'?: string;
  /** Các props khác */
  [key: string]: any;
}
