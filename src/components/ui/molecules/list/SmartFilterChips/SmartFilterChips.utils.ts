// Format label hiển thị cho chip
export function getChipText(chip: { label: string; valueLabel?: string }) {
  return chip.valueLabel ? `${chip.label}: ${chip.valueLabel}` : chip.label;
}
