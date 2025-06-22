/**
 * Props cho atom Link
 */
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Nội dung link */
  children: React.ReactNode;
  /** URL liên kết */
  href: string;
  /** Mở tab mới (target=_blank)? */
  external?: boolean;
  /** Có gạch chân? */
  underline?: boolean;
  /** Có thêm icon? */
  icon?: React.ReactNode;
  /** Disabled? */
  disabled?: boolean;
  /** Custom class */
  className?: string;
}
