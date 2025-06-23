import { ReactNode } from "react";

export interface TableColorCellProps {
  value: string | null | undefined;     // Mã màu (hex, rgb, tên, ...)
  label?: string;                       // Nhãn hiển thị (nếu có)
  icon?: ReactNode;
  tooltip?: string;
  copyable?: boolean;
  onCopy?: (v: string) => void;
  highlight?: boolean;
  bold?: boolean;
  className?: string;
}
