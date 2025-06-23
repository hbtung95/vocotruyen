import { ActionCellItem } from "./TableActionCell.types";

export function visibleActions(actions: ActionCellItem[], max?: number) {
  const show = actions.filter(a => a.show !== false);
  if (max && show.length > max) {
    return { main: show.slice(0, max), more: show.slice(max) };
  }
  return { main: show, more: [] };
}
