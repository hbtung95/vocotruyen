import { ReactNode } from "react";

export interface ListItemActionProps {
  icon?: ReactNode;
  label: string;
  description?: string;
  actions: ReactNode;                 // Bắt buộc có action
  selected?: boolean;
  disabled?: boolean;
  onActionClick?: () => void;
  className?: string;
  tabIndex?: number;
}
