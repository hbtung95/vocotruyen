import { ReactNode } from "react";

export interface SpySection {
  id: string;               // Id của section
  label: string;            // Nhãn (hiển thị)
  icon?: ReactNode;
}

export interface ScrollSpyIndicatorProps {
  sections: SpySection[];         // Danh sách các section (id, label, icon)
  currentId?: string;             // Id của section đang active (hoặc auto detect)
  onSectionClick?: (id: string) => void;
  vertical?: boolean;             // true: hiển thị dọc
  indicatorColor?: string;        // Màu thanh indicator
  className?: string;
}
