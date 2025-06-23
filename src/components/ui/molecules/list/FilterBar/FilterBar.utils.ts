// Hàm reset value các filter về giá trị ban đầu
import { FilterField } from "./FilterBar.types";

export function getDefaultFilterValue(fields: FilterField[]) {
  const obj: Record<string, any> = {};
  fields.forEach(f => {
    if (f.type === "multi-select") obj[f.key] = [];
    else obj[f.key] = "";
  });
  return obj;
}
