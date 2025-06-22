/**
 * Props cho atom Radio
 */
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Nhãn hiển thị bên phải radio */
  label?: React.ReactNode;
  /** Giá trị của radio */
  value: string;
  /** Có chọn hay không */
  checked?: boolean;
  /** Có disabled hay không */
  disabled?: boolean;
  /** Sự kiện thay đổi */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Custom class */
  className?: string;
}
