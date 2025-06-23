// Sinh mảng số sao [0,1,2,3,4] (5 sao)
export function getStars(value: number, max: number) {
  return Array.from({ length: max }, (_, i) => i < value);
}
