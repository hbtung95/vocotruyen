// Tiện ích phân tích trạng thái, label, hoặc custom logic
export function getListItemClass(
  selected?: boolean,
  disabled?: boolean
): string {
  if (disabled) return "opacity-50 pointer-events-none";
  if (selected) return "bg-accent/10 font-semibold";
  return "hover:bg-accent/5";
}
