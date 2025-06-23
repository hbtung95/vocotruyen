import { ReactNode } from "react";

export type FilterDropdownOption = { value: any; label: string };

export interface FilterDropdownProps {
  label?: string;
  icon?: ReactNode;
  value?: any;
  options: FilterDropdownOption[];
  onChange: (val: any) => void;
  multi?: boolean;
  placeholder?: string;
  className?: string;
  dropdownAlign?: "left" | "right";
  disabled?: boolean;
}
