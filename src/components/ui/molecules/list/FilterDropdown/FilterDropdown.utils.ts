// Format label cho multi value
export function getSelectedLabel(options: { value: any; label: string }[], value: any, multi: boolean) {
  if (!multi) {
    const found = options.find(opt => opt.value === value);
    return found ? found.label : "";
  }
  if (Array.isArray(value)) {
    return options.filter(opt => value.includes(opt.value)).map(opt => opt.label).join(", ");
  }
  return "";
}
