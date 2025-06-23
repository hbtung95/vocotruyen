import { ReactNode } from "react";

export type ImportFormat = "csv" | "xlsx" | "json";

export interface TableImportMenuProps {
  onImport: (file: File, fmt: ImportFormat) => void;
  formats?: ImportFormat[];
  loading?: boolean;
  error?: string | ReactNode;
  onDownloadDemo?: (fmt: ImportFormat) => void;
  instructions?: ReactNode;
  disabled?: boolean;
  className?: string;
}
