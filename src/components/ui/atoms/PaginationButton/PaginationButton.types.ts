/**
 * Props cho atom PaginationButton
 */
export interface PaginationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Trang hiện tại? */
  active?: boolean;
  /** Ẩn/không dùng được? */
  disabled?: boolean;
  /** Loại nút: trang, prev, next, first, last, ... */
  variant?: "page" | "prev" | "next" | "first" | "last" | "ellipsis";
  /** Nội dung nút (số hoặc icon) */
  children?: React.ReactNode;
  /** Custom class */
  className?: string;
}
