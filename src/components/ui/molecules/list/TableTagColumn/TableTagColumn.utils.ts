import { TagOption } from "./TableTagColumn.types";

// Lấy option tag theo value
export function getTagOption(value: string, options?: TagOption[]): TagOption {
  return options?.find(t => t.value === value) || { value, label: value };
}
