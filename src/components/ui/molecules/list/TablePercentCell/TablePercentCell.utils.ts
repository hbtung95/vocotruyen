// Format %
export function formatPercent(value: number, fixed: number = 2) {
  if (typeof value !== "number") return "";
  return value.toFixed(fixed) + "%";
}
