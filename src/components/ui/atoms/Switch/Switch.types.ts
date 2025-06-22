/**
 * Props cho atom Switch
 */
export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Nhãn bên phải switch */
  label?: React.ReactNode;
  /** Trạng thái bật/tắt */
  checked?: boolean;
  /** Disabled */
  disabled?: boolean;
  /** Sự kiện thay đổi */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Custom class */
  className?: string;
}
