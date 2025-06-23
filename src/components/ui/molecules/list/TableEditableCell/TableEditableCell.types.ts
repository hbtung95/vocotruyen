import { ReactNode } from "react";

export type EditableCellType = "text" | "number" | "select" | "textarea";

export interface OptionItem {
  value: string | number;
  label: string;
}

export interface TableEditableCellProps {
  value: string | number | null | undefined;
  type?: EditableCellType;
  options?: OptionItem[];                // Cho select
  editable?: boolean;
  multiLine?: boolean;
  placeholder?: string;
  loading?: boolean;
  error?: boolean;
  tooltip?: string;
  icon?: ReactNode;
  label?: ReactNode;
  highlight?: boolean;
  onSave?: (v: string | number) => void;
  onCancel?: () => void;
  validate?: (v: string | number) => string | undefined;
  className?: string;
}
