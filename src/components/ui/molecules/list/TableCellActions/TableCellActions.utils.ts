// Có thể thêm logic xử lý phân loại action, filter disabled, v.v.
export function filterEnabledActions(actions: CellAction[]) {
  return actions.filter(a => !a.disabled);
}
