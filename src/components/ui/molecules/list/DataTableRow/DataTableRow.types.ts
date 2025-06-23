import { ReactNode } from "react";

export interface DataTableCell {
  key: string;
  content: ReactNode;
  align?: "left" | "center" | "right";
  editable?: boolean;
  onEdit?: (value: any) => void;
  width?: number | string; // px hoặc %
}

export interface DataTableRowProps {
  cells: DataTableCell[];
  selected?: boolean;
  checked?: boolean;
  onCheck?: (checked: boolean) => void;
  onRowClick?: () => void;
  highlight?: boolean;
  disabled?: boolean;
  className?: string;
  rowId?: string | number;
  actions?: ReactNode;
}
