// Cắt note + "..."
export function truncateNote(note: string, max: number) {
  if (note.length <= max) return note;
  return note.slice(0, max - 1) + "…";
}
