// Di chuyển một phần tử trong mảng (drag and drop reorder)
export function arrayMove<T>(arr: T[], from: number, to: number): T[] {
  const next = arr.slice();
  const item = next.splice(from, 1)[0];
  next.splice(to, 0, item);
  return next;
}
