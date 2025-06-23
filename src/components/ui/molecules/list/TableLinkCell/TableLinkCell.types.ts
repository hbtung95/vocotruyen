import { ReactNode } from "react";

export type LinkType = "url" | "email" | "phone" | "resource";

export interface TableLinkCellProps {
  value: string | null | undefined;
  type?: LinkType;               // Tự động đoán nếu không truyền
  icon?: ReactNode;
  label?: string;                // Text thay cho link
  highlight?: boolean;           // Nổi bật nếu cần
  tooltip?: string;
  invalid?: boolean;             // Hiện trạng thái lỗi
  copyable?: boolean;
  onCopy?: (value: string) => void;
  className?: string;
}
