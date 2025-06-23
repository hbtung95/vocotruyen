// Có thể mở rộng các hàm hỗ trợ toolbar ở đây (ví dụ: phân tích filter, export...)
export function getToolbarTitle(title?: string, count?: number) {
  return title ? `${title}${count ? ` (${count})` : ""}` : "";
}
