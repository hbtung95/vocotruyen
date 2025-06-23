import { ReactNode } from "react";

export interface TagOption {
  value: string;
  label: string;
  color?: string;
  icon?: ReactNode;
  tooltip?: string;
}

export interface TableTagColumnProps {
  tags: string[] | TagOption[];         // List value hoặc list tag option
  options?: TagOption[];                // (optional) mapping cho tag value
  multi?: boolean;                      // true: cho nhiều tag/cell
  className?: string;
  max?: number;                         // Hiện tối đa bao nhiêu tag, còn lại "...+N"
}
