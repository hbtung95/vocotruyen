import { ReactNode } from "react";

export type DateDisplayMode = "date" | "datetime" | "time" | "relative";

export interface TableDateCellProps {
  value: string | Date | number | null | undefined;
  mode?: DateDisplayMode;
  format?: string;                     // Custom format, ví dụ: "DD/MM/YYYY"
  icon?: ReactNode;
  highlight?: boolean;
  tooltip?: string;
  overdue?: boolean;                   // quá hạn
  className?: string;
  locale?: string;
}
