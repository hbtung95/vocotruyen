import { ReactNode } from "react";

export interface QuickSummaryField {
  key: string;                // field name
  label?: string;             // label header (nếu muốn)
  value: ReactNode;           // kết quả tổng hợp
  align?: "left" | "right" | "center";
  className?: string;
  tooltip?: string;
}

export interface TableQuickSummaryProps {
  fields: QuickSummaryField[];
  loading?: boolean;
  className?: string;
}
