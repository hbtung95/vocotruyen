import { useMemo } from "react";
import { QuickSummaryField } from "./TableQuickSummary.types";

// Memo hoá fields nếu không thay đổi
export function useSummaryFields(fields: QuickSummaryField[], loading?: boolean) {
  return useMemo(() => fields, [fields, loading]);
}
