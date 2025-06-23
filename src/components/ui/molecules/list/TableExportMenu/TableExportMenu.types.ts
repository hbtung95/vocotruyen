import { ReactNode } from "react";

export type ExportFormat = "csv" | "xlsx" | "json" | "pdf";

export interface ExportMenuOption {
  key: ExportFormat;
  label: string;
  icon?: ReactNode;
}

export interface TableExportMenuProps {
  onExport: (fmt: ExportFormat, options?: { selected?: boolean }) => void;
  formats?: ExportMenuOption[];
  withSelection?: boolean;         // Cho phép export các dòng đang chọn
  disabled?: boolean;
  className?: string;
}
