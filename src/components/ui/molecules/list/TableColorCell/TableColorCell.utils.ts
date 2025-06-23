// Format label
export function getLabel(value: string, label?: string) {
  if (label) return label;
  if (!value) return "";
  if (value.startsWith("#")) return value.toUpperCase();
  return value;
}
