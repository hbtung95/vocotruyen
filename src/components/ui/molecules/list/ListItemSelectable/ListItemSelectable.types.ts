import { ReactNode } from "react";

export interface ListItemSelectableProps {
  icon?: ReactNode;
  label: string;
  description?: string;
  checked?: boolean;
  disabled?: boolean;
  actions?: ReactNode;
  onChange?: (checked: boolean) => void;
  className?: string;
  tabIndex?: number;
  checkboxAriaLabel?: string;
}
