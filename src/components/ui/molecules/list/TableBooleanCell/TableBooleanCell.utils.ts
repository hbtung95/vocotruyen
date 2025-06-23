// Chọn màu cho trạng thái true/false
export function getBoolColor(val: boolean, trueColor?: string, falseColor?: string) {
  return val ? (trueColor || "#31ba63") : (falseColor || "#e94f44");
}
