/**
 * Props cho atom InputGroup
 */
export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Input chính */
  children: React.ReactNode;
  /** Phần đầu (icon/nút/label) */
  prepend?: React.ReactNode;
  /** Phần cuối (icon/nút/label) */
  append?: React.ReactNode;
  /** Bắt buộc full width? */
  fullWidth?: boolean;
  /** Custom class */
  className?: string;
}
