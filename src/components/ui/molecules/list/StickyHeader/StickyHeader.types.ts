import { ReactNode, CSSProperties } from "react";

export interface StickyHeaderProps {
  children: ReactNode;             // Nội dung header
  top?: number;                    // Khoảng cách sticky từ top (px)
  zIndex?: number;                 // Ưu tiên z-index
  className?: string;
  style?: CSSProperties;
  shadowOnScroll?: boolean;        // Bóng mờ khi dính lên top
}
