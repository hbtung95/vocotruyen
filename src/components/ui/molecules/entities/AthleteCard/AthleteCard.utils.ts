// Ví dụ: tính tổng số huy chương
export function getTotalMedals(medals: { gold: number; silver: number; bronze: number }) {
  return medals.gold + medals.silver + medals.bronze;
}
