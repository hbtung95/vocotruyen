import { useMemo } from "react";
import { TableTagColumnProps, TagOption } from "./TableTagColumn.types";
import { getTagOption } from "./TableTagColumn.utils";

// Chuyển list tag thành TagOption[]
export function useTagOptions({ tags, options }: TableTagColumnProps): TagOption[] {
  return useMemo(() => {
    if (!tags) return [];
    if (typeof tags[0] === "string") {
      return (tags as string[]).map(val => getTagOption(val, options));
    }
    return tags as TagOption[];
  }, [tags, options]);
}
