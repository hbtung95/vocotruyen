// Xử lý className động cho selectable item, có thể mở rộng thêm các trạng thái khác nếu cần.
export function getSelectableClass(
  checked?: boolean,
  disabled?: boolean
): string {
  if (disabled) return "opacity-50 pointer-events-none";
  if (checked) return "bg-accent/10 font-semibold";
  return "hover:bg-accent/5";
}
