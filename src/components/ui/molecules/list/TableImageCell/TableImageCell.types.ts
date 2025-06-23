import { ReactNode } from "react";

export interface ImageCellItem {
  src: string;
  alt?: string;
  tooltip?: string;
}

export interface TableImageCellProps {
  images: string[] | ImageCellItem[];
  shape?: "circle" | "square" | "rounded";
  size?: number;                        // px, default 38
  multi?: boolean;                      // Cho phép nhiều ảnh/cell
  max?: number;                         // Hiện tối đa N ảnh
  fallback?: ReactNode;                 // Fallback khi lỗi
  onClickImage?: (src: string, idx: number) => void;
  className?: string;
}
