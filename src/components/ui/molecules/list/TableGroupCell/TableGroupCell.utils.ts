// Lấy padding theo level
export function groupIndent(level?: number) {
  if (!level || level < 1) return 0;
  return 14 * (level - 1);
}
