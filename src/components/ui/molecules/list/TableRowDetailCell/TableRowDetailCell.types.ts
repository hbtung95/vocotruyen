import { ReactNode } from "react";

export interface TableRowDetailCellProps {
  open?: boolean;                // Đang mở panel detail
  children?: ReactNode;          // Nội dung hiển thị chi tiết
  loading?: boolean;
  error?: boolean;
  padding?: number;
  sticky?: boolean;              // Sticky chi tiết khi cuộn
  highlight?: boolean;
  className?: string;
  actions?: ReactNode[];         // Các quick action phía phải
  onClose?: () => void;
}
