// Tính tổng số trang từ total & pageSize
export function getPageCount(total: number, pageSize: number) {
  return Math.max(1, Math.ceil(total / pageSize));
}

// Tạo mảng số trang hiển thị (có thể mở rộng thêm ... nếu quá dài)
export function getPageList(current: number, count: number, max = 5) {
  let start = Math.max(1, current - Math.floor(max / 2));
  let end = Math.min(count, start + max - 1);
  if (end - start < max - 1) start = Math.max(1, end - max + 1);
  const pages = [];
  for (let i = start; i <= end; ++i) pages.push(i);
  return pages;
}
