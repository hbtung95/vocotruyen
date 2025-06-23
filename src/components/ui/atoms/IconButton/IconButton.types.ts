/**
 * Props cho atom IconButton
 */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon chính (bắt buộc) */
  icon: React.ReactNode;
  /** Kích thước: sm, md, lg (default md) */
  size?: "sm" | "md" | "lg";
  /** Variant: primary, outline, danger, ghost, ... */
  variant?: "primary" | "outline" | "danger" | "ghost";
  /** Loading state? */
  loading?: boolean;
  /** A11y label (bắt buộc nếu không có text) */
  "aria-label": string;
  /** Custom class */
  className?: string;
}
