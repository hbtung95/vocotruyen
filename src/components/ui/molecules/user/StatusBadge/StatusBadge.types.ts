export interface StatusBadgeProps {
  status:
    | "active"
    | "inactive"
    | "pending"
    | "banned"
    | "approved"
    | "rejected"
    | "warning"
    | "error"
    | "success"
    | "draft"
    | "processing"
    | string; // Hỗ trợ mở rộng
  label?: string;         // Custom label hiển thị
  icon?: React.ReactNode; // Optional icon
  className?: string;
  tooltip?: string;
}
