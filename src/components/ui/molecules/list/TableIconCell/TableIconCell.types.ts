import { ReactNode } from "react";

export interface IconCellItem {
  icon: ReactNode;
  color?: string;
  tooltip?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface TableIconCellProps {
  icons: ReactNode[] | IconCellItem[];
  multi?: boolean;
  max?: number;
  highlight?: boolean;
  disabled?: boolean;
  className?: string;
}
