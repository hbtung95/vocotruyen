import { ReactNode } from "react";

export interface TableEmptyStateProps {
  icon?: ReactNode;           // Icon minh họa (SVG, emoji...)
  title?: string;             // Tiêu đề (mặc định: Không có dữ liệu)
  description?: string;       // Mô tả phụ
  action?: ReactNode;         // Nút/thao tác gợi ý (tạo mới, tìm lại...)
  className?: string;
}
