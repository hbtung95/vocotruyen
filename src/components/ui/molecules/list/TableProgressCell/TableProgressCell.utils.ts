// Chọn màu trạng thái
export function getProgressColor(
  value: number,
  error?: boolean,
  color?: string,
  successColor?: string,
  errorColor?: string
) {
  if (error) return errorColor || "#e94f44";
  if (value >= 100) return successColor || "#31ba63";
  return color || "#2979ff";
}
