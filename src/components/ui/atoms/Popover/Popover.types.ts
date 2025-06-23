export interface PopoverProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: "top" | "right" | "bottom" | "left";
  openOnHover?: boolean;
  className?: string;
}
