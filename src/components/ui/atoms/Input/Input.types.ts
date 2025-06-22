/**
 * Props cho atom Input
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Nhãn hiển thị (ẩn nếu không dùng) */
  label?: string;
  /** Hiển thị icon trái */
  leftIcon?: React.ReactNode;
  /** Hiển thị icon phải */
  rightIcon?: React.ReactNode;
  /** Trạng thái lỗi */
  error?: string;
  /** Disable input */
  disabled?: boolean;
  /** Kích thước: sm | md | lg | number */
  size?: "sm" | "md" | "lg" | number;
  /** Custom class */
  className?: string;
}
