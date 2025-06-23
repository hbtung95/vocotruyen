/**
 * Props cho atom Legend
 */
export interface LegendProps extends React.HTMLAttributes<HTMLLegendElement> {
  /** Nội dung legend */
  children: React.ReactNode;
  /** Cỡ chữ (sm, md, lg) */
  size?: "sm" | "md" | "lg";
  /** Custom class */
  className?: string;
}
