import { ReactNode } from "react";

export interface CellAction {
  key: string;
  label: string;
  icon?: ReactNode;
  onClick: () => void;
  danger?: boolean;
  disabled?: boolean;
  tooltip?: string;
}

export interface TableCellActionsProps {
  actions: CellAction[];
  orientation?: "horizontal" | "vertical"; // Kiểu hiển thị
  compact?: boolean;                       // Nhỏ gọn hơn
  className?: string;
}
