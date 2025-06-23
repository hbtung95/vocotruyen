// Indent theo cấp lồng nhau
export function collapseIndent(level?: number) {
  if (!level || level < 1) return 0;
  return 14 * (level - 1);
}
