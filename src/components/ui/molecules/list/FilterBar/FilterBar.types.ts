import { ReactNode } from "react";

export type FilterOption = { value: any; label: string };

export interface FilterField {
  key: string;
  label: string;
  type: "text" | "select" | "date" | "multi-select" | "custom";
  options?: FilterOption[];             // Nếu select/multi
  render?: ReactNode;                   // custom input
}

export interface FilterBarProps {
  fields: FilterField[];
  value: Record<string, any>;
  onChange: (val: Record<string, any>) => void;
  onReset?: () => void;
  onSubmit?: () => void;
  className?: string;
}
