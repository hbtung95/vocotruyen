/**
 * Props cho atom TableCell
 */
export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  /** Nội dung */
  children: React.ReactNode;
  /** Kiểu dữ liệu */
  variant?: "text" | "number" | "icon" | "status" | "action";
  /** Căn lề (left, center, right) */
  align?: "left" | "center" | "right";
  /** Kích thước */
  size?: "sm" | "md" | "lg";
  /** Có là header không */
  header?: boolean;
  /** Có cho phép sort không? */
  sortable?: boolean;
  /** Có đang được sort? */
  sorted?: boolean;
  /** Sắp xếp theo chiều nào? */
  sortDirection?: "asc" | "desc";
  /** Custom class */
  className?: string;
}
