/**
 * Các props của component Badge
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Nội dung trong badge */
  children: React.ReactNode;
  /** Màu sắc/variant: success | error | info | warning | default */
  variant?: 'success' | 'error' | 'info' | 'warning' | 'default';
  /** Có bo tròn không (pill) */
  pill?: boolean;
  /** Custom class */
  className?: string;
}
