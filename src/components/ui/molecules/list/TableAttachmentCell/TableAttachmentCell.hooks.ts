import { useMemo } from "react";
import { AttachmentItem } from "./TableAttachmentCell.types";

export function useVisibleAttachments(arr: AttachmentItem[], max?: number) {
  return useMemo(() => (max ? arr.slice(0, max) : arr), [arr, max]);
}
