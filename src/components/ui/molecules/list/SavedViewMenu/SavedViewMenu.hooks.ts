import { useCallback } from "react";
import { SavedView } from "./SavedViewMenu.types";

export function useSavedViewActions(
  onRename?: (id: string) => void,
  onDelete?: (id: string) => void,
  onDuplicate?: (id: string) => void,
  onSetDefault?: (id: string) => void
) {
  return useCallback((action: string, id: string) => {
    switch (action) {
      case "rename": onRename && onRename(id); break;
      case "delete": onDelete && onDelete(id); break;
      case "duplicate": onDuplicate && onDuplicate(id); break;
      case "setDefault": onSetDefault && onSetDefault(id); break;
      default: break;
    }
  }, [onRename, onDelete, onDuplicate, onSetDefault]);
}
