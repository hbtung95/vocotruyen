export interface FilterChip {
  key: string;
  label: string;
  valueLabel?: string;     // Hiển thị giá trị lọc (VD: "active", "10-20")
}

export interface SmartFilterChipsProps {
  chips: FilterChip[];
  onRemove: (key: string) => void;
  onClearAll?: () => void;
  className?: string;
}
