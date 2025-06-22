/**
 * Props cho atom Textarea
 */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Label hiển thị */
  label?: string;
  /** Error báo lỗi */
  error?: string;
  /** Disabled */
  disabled?: boolean;
  /** Kích thước: sm | md | lg | number */
  size?: "sm" | "md" | "lg" | number;
  /** Custom class */
  className?: string;
}
