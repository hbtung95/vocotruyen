import { ReactNode } from "react";

export interface BulkAction {
  key: string;
  label: string;
  icon?: ReactNode;
  onClick: () => void;
  danger?: boolean;
  disabled?: boolean;
  tooltip?: string;
}

export interface BulkSelectBarProps {
  selectedCount: number;                  // Số dòng đang chọn
  totalCount: number;                     // Tổng số dòng trong table
  onClearSelection: () => void;
  actions: BulkAction[];                  // Danh sách hành động cho hàng loạt
  className?: string;
}
