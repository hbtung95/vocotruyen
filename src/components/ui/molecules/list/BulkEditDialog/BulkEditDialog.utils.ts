// Tạo object mặc định từ fields
import { BulkEditField } from "./BulkEditDialog.types";

export function getDefaultBulkValues(fields: BulkEditField[]) {
  const values: Record<string, any> = {};
  fields.forEach(field => {
    if (field.type === "checkbox") values[field.key] = false;
    else values[field.key] = "";
  });
  return values;
}
