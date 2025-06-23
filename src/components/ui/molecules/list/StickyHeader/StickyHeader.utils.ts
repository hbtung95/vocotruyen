// Hỗ trợ tự động set z-index hoặc style nếu chưa có
export function getZIndex(z?: number) {
  return typeof z === "number" ? z : 120;
}
