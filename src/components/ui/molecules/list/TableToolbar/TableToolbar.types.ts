import { ReactNode } from "react";

export interface TableToolbarProps {
  title?: string;
  selectedCount?: number;
  onBulkAction?: () => void;
  bulkActions?: ReactNode;
  onRefresh?: () => void;
  onAdd?: () => void;
  searchPlaceholder?: string;
  onSearch?: (keyword: string) => void;
  filterComponent?: ReactNode;
  extraActions?: ReactNode;
  disabled?: boolean;
  className?: string;
}
