// Tìm index section đang active
export function getActiveIndex(sections: { id: string }[], currentId?: string) {
  return sections.findIndex(s => s.id === currentId);
}
