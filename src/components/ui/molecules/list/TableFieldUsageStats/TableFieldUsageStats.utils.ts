// Tính phần trăm không rỗng
export function getFieldFillPercent(nonEmpty: number, total: number): number {
  if (!total) return 0;
  return Math.round((nonEmpty / total) * 100);
}
