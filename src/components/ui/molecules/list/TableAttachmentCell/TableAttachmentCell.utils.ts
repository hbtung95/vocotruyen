import { AttachmentItem } from "./TableAttachmentCell.types";

export function formatSize(size?: number) {
  if (!size) return "";
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
  if (size < 1024 * 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  return `${(size / (1024 * 1024 * 1024)).toFixed(1)} GB`;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  pdf: <span style={{ color: "#e94f44" }}>📄</span>,
  doc: <span style={{ color: "#4285f4" }}>📄</span>,
  docx: <span style={{ color: "#4285f4" }}>📄</span>,
  xls: <span style={{ color: "#3cb371" }}>📊</span>,
  xlsx: <span style={{ color: "#3cb371" }}>📊</span>,
  ppt: <span style={{ color: "#ff9900" }}>📊</span>,
  jpg: <span>🖼️</span>,
  jpeg: <span>🖼️</span>,
  png: <span>🖼️</span>,
  zip: <span style={{ color: "#ffb700" }}>🗜️</span>,
  rar: <span style={{ color: "#ffb700" }}>🗜️</span>,
  mp3: <span>🎵</span>,
  mp4: <span>🎬</span>,
  default: <span>📎</span>,
};

export function getFileIcon(type?: string) {
  if (!type) return ICON_MAP.default;
  const t = type.toLowerCase();
  return ICON_MAP[t] || ICON_MAP.default;
}
