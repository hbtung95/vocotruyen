import { ReactNode } from "react";

export interface BulkEditField {
  key: string;
  label: string;
  type: "text" | "number" | "select" | "checkbox" | "custom";
  options?: { value: any; label: string }[]; // Nếu select
  render?: ReactNode; // custom input
}

export interface BulkEditDialogProps {
  open: boolean;
  onClose: () => void;
  fields: BulkEditField[];
  onSubmit: (data: Record<string, any>) => void;
  title?: string;
  loading?: boolean;
  className?: string;
}
