/**
 * Props cho atom MenuButton
 */
export interface MenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Nội dung (text hoặc icon) */
  children: React.ReactNode;
  /** Variant: primary, outline, ghost */
  variant?: "primary" | "outline" | "ghost";
  /** Kích thước: sm, md, lg */
  size?: "sm" | "md" | "lg";
  /** Có trạng thái mở menu không? */
  open?: boolean;
  /** Có hiển thị caret không? */
  caret?: boolean;
  /** Custom class */
  className?: string;
}
