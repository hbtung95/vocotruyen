import { UserCellItem } from "./TableUserCell.types";

export function getUserInitial(name?: string) {
  if (!name) return "U";
  const words = name.trim().split(" ");
  if (words.length === 1) return words[0][0].toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

export function getStatusColor(status?: string) {
  switch (status) {
    case "active": return "#47d16a";
    case "online": return "#47d16a";
    case "offline": return "#c2c7d2";
    case "inactive": return "#e94f44";
    default: return "#bbb";
  }
}
