/**
 * Props cho component Checkbox
 */
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Nhãn hiển thị bên phải checkbox */
  label?: React.ReactNode;
  /** Trạng thái checked */
  checked?: boolean;
  /** Trạng thái trung gian (indeterminate) */
  indeterminate?: boolean;
  /** Disable */
  disabled?: boolean;
  /** Sự kiện thay đổi */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Custom class */
  className?: string;
}
