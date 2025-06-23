import { ImageCellItem } from "./TableImageCell.types";

// Chuyển từ string[] sang ImageCellItem[]
export function toImageItems(images: string[] | ImageCellItem[]): ImageCellItem[] {
  if (!images) return [];
  if (typeof images[0] === "string") {
    return (images as string[]).map(src => ({ src }));
  }
  return images as ImageCellItem[];
}
