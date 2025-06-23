// Hook này có thể dùng để random độ rộng từng dòng skeleton (tăng tự nhiên)
export function useRandomWidth(min = 40, max = 90) {
  return `${Math.floor(Math.random() * (max - min + 1)) + min}%`;
}
