// Chọn ngẫu nhiên một emoji nếu không có icon
export function pickRandomEmoji() {
  const list = ["📭", "📄", "🗒️", "📦", "❌", "📑"];
  return list[Math.floor(Math.random() * list.length)];
}
