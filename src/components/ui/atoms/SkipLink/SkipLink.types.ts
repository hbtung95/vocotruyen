/**
 * Props cho atom SkipLink
 */
export interface SkipLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** ID của vùng cần nhảy tới (thường là #main) */
  href: string;
  /** Nội dung nút (thường là 'Bỏ qua đến nội dung chính') */
  children?: React.ReactNode;
  /** Custom class */
  className?: string;
}
