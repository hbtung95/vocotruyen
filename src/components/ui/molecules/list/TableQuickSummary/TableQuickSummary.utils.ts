import { QuickSummaryField } from "./TableQuickSummary.types";

// Trả về value theo key
export function getFieldValue(fields: QuickSummaryField[], key: string) {
  return fields.find(f => f.key === key)?.value ?? "";
}
