/**
 * Props cho atom Select
 */
export interface SelectOption {
  label: React.ReactNode;
  value: string | number;
  icon?: React.ReactNode;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Danh sách option */
  options: SelectOption[];
  /** Giá trị đang chọn */
  value?: string | number;
  /** Nhãn hiển thị */
  label?: string;
  /** Placeholder khi chưa chọn */
  placeholder?: string;
  /** Có icon kèm? */
  withIcon?: boolean;
  /** Trạng thái lỗi */
  error?: string;
  /** Disable */
  disabled?: boolean;
  /** Kích thước */
  size?: "sm" | "md" | "lg";
  /** Custom class */
  className?: string;
}
