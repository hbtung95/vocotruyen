import { ReactNode } from "react";

export interface TableBooleanCellProps {
  value: boolean | null | undefined;
  trueLabel?: string;
  falseLabel?: string;
  trueIcon?: ReactNode;
  falseIcon?: ReactNode;
  trueColor?: string;
  falseColor?: string;
  tooltip?: string;
  highlight?: boolean;
  toggleable?: boolean;
  onToggle?: (next: boolean) => void;
  className?: string;
}
