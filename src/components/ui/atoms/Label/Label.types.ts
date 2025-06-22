/**
 * Props cho atom Label
 */
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** Nội dung label */
  children: React.ReactNode;
  /** Id input để for (a11y) */
  htmlFor?: string;
  /** Trạng thái bắt buộc/optional */
  required?: boolean;
  optional?: boolean;
  /** Trạng thái disabled */
  disabled?: boolean;
  /** Trạng thái lỗi */
  error?: boolean;
  /** Custom class */
  className?: string;
}
