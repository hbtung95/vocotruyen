import { useMemo } from "react";
import { ImageCellItem } from "./TableImageCell.types";
import { toImageItems } from "./TableImageCell.utils";

export function useImages(images: string[] | ImageCellItem[], max?: number) {
  return useMemo(() => {
    const arr = toImageItems(images);
    return max ? arr.slice(0, max) : arr;
  }, [images, max]);
}
