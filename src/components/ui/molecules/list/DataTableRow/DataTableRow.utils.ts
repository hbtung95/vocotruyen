// Xử lý className động cho row
export function getRowClass(selected?: boolean, highlight?: boolean, disabled?: boolean): string {
  if (disabled) return "opacity-50 pointer-events-none";
  if (selected) return "bg-primary-50 dark:bg-primary-900 font-semibold";
  if (highlight) return "bg-yellow-50 dark:bg-yellow-900";
  return "hover:bg-accent/5";
}
