import { LinkType } from "./TableLinkCell.types";

// Đoán loại link
export function detectLinkType(val: string): LinkType {
  if (!val) return "url";
  if (/^mailto:/i.test(val) || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(val)) return "email";
  if (/^tel:/i.test(val) || /^(\+?\d{1,3}[-.\s]?|\()?(\d{3})\)?[-.\s]?\d{3}[-.\s]?\d{4,6}$/.test(val)) return "phone";
  if (/^https?:\/\//i.test(val)) return "url";
  return "resource";
}

export function formatDisplay(val: string, type: LinkType): string {
  if (!val) return "";
  if (type === "email") return val.replace(/^mailto:/i, "");
  if (type === "phone") return val.replace(/^tel:/i, "");
  if (type === "url" && val.length > 34) return val.slice(0, 30) + "...";
  return val;
}
