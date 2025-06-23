import { ReactNode } from "react";

export interface ListItemProps {
  icon?: ReactNode;
  label: string;
  description?: string;
  selected?: boolean;
  disabled?: boolean;
  actions?: ReactNode;
  onClick?: () => void;
  className?: string;
  tabIndex?: number;
}
