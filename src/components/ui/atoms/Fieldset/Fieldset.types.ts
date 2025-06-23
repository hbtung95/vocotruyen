/**
 * Props cho atom Fieldset
 */
export interface FieldsetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  /** Legend cho nhóm field (optional) */
  legend?: React.ReactNode;
  /** Children: group input, label, v.v. */
  children: React.ReactNode;
  /** Disabled cả group? */
  disabled?: boolean;
  /** Custom class */
  className?: string;
}
