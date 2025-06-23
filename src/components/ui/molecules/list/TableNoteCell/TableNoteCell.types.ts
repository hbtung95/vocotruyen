import { ReactNode } from "react";

export interface TableNoteCellProps {
  note: string | null | undefined;
  maxLength?: number;           // Tự động cắt (vd 120)
  multiLine?: boolean;
  markdown?: boolean;
  tooltip?: string;
  icon?: ReactNode;
  label?: ReactNode;
  highlight?: boolean;
  error?: boolean;
  copyable?: boolean;
  onCopy?: (note: string) => void;
  bold?: boolean;
  className?: string;
}
