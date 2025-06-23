// Cắt text và hiện "..."
export function truncateText(text: string, max: number) {
  if (text.length <= max) return text;
  return text.slice(0, max - 1) + "…";
}
