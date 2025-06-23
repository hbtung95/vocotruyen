export type UserRole = "admin" | "manager" | "referee" | "coach" | "athlete" | "guest" | "viewer";

export interface RoleBadgeProps {
  role: UserRole;
  className?: string;
}
