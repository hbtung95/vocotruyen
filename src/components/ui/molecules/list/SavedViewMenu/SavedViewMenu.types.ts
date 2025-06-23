import { ReactNode } from "react";

export interface SavedView {
  id: string;
  name: string;
  icon?: ReactNode;
  isDefault?: boolean;
}

export interface SavedViewMenuProps {
  views: SavedView[];
  currentId?: string;
  onSelect: (id: string) => void;
  onAdd?: () => void;
  onRename?: (id: string) => void;
  onDelete?: (id: string) => void;
  onDuplicate?: (id: string) => void;
  onSetDefault?: (id: string) => void;
  className?: string;
}
