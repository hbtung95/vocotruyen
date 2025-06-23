import { ReactNode } from "react";

export interface ActionCellItem {
  key: string;
  icon?: ReactNode;
  label?: string;
  tooltip?: string;
  color?: string;
  disabled?: boolean;
  confirm?: string;               // Xác nhận "Bạn chắc chắn xoá?"
  onClick?: () => void;
  show?: boolean;
}

export interface TableActionCellProps {
  actions: ActionCellItem[];
  max?: number;                   // Hiện tối đa N action, còn lại đưa vào menu
  menuLabel?: string;             // Nhãn menu (mặc định "...", More)
  menuIcon?: ReactNode;
  menuTooltip?: string;
  highlight?: boolean;
  disabled?: boolean;
  className?: string;
}
