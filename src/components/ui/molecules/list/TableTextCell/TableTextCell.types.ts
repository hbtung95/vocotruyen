import { ReactNode } from "react";

export interface TableTextCellProps {
  value: string | null | undefined;
  maxLength?: number;          // Tự động cắt text (ví dụ: 40 ký tự)
  ellipsis?: boolean;          // Hiện ... nếu dài quá
  multiLine?: boolean;         // Cho phép nhiều dòng
  rows?: number;               // Số dòng hiển thị tối đa
  highlight?: boolean;
  tooltip?: string;
  icon?: ReactNode;
  label?: ReactNode;           // Label phụ (ví dụ trạng thái)
  copyable?: boolean;
  onCopy?: (v: string) => void;
  bold?: boolean;
  error?: boolean;
  className?: string;
}
