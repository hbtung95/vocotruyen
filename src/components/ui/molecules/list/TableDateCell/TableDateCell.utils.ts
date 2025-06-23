import { DateDisplayMode } from "./TableDateCell.types";

// Sử dụng Intl.DateTimeFormat hoặc dayjs nếu có (ở đây dùng Intl mặc định)
export function formatDate(
  value: string | Date | number | null | undefined,
  mode: DateDisplayMode,
  format?: string,
  locale?: string
): string {
  if (!value) return "";
  const date = typeof value === "string" || typeof value === "number" ? new Date(value) : value;
  if (!(date instanceof Date) || isNaN(date.getTime())) return "";
  const opt: Intl.DateTimeFormatOptions =
    mode === "time"
      ? { hour: "2-digit", minute: "2-digit" }
      : mode === "datetime"
      ? { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }
      : { year: "numeric", month: "2-digit", day: "2-digit" };
  // Simple custom format
  if (format) {
    // Chỉ demo 2 kiểu phổ biến
    if (format === "DD/MM/YYYY")
      return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}/${date.getFullYear()}`;
    if (format === "MM/DD/YYYY")
      return `${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}/${date.getDate().toString().padStart(2, "0")}/${date.getFullYear()}`;
  }
  if (mode === "relative") {
    const now = new Date().getTime();
    const diff = now - date.getTime();
    const sign = diff < 0 ? 1 : -1;
    const abs = Math.abs(diff);
    if (abs < 60 * 1000) return "Vừa xong";
    if (abs < 60 * 60 * 1000) return `${Math.floor(abs / 60000)} phút${sign > 0 ? " nữa" : " trước"}`;
    if (abs < 24 * 60 * 60 * 1000) return `${Math.floor(abs / 3600000)} giờ${sign > 0 ? " nữa" : " trước"}`;
    return `${Math.floor(abs / 86400000)} ngày${sign > 0 ? " nữa" : " trước"}`;
  }
  return date.toLocaleString(locale || "vi-VN", opt);
}

export function isOverdue(value: string | Date | number | null | undefined): boolean {
  if (!value) return false;
  const date = typeof value === "string" || typeof value === "number" ? new Date(value) : value;
  if (!(date instanceof Date) || isNaN(date.getTime())) return false;
  return date.getTime() < new Date().setHours(0, 0, 0, 0);
}
