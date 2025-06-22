import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { Role } from "../types";

// Chuẩn hóa prop: roles có thể là 1 hoặc nhiều quyền được phép
type Props = {
  roles: Role[];               // Định nghĩa đúng kiểu Role (multi)
  children: React.ReactNode;
};

const RoleGuard: React.FC<Props> = ({ roles, children }) => {
  const { user } = useAuth();

  // Nếu chưa đăng nhập → chuyển về login
  if (!user) return <Navigate to="/login" replace />;

  // Nếu user có ÍT NHẤT 1 role hợp lệ
  if (user.roles && roles.some(role => user.roles.includes(role))) {
    return <>{children}</>;
  }

  // Nếu không đủ quyền → chuyển sang trang bị chặn (có thể làm UI riêng)
  return <Navigate to="/unauthorized" replace />;
};

export default RoleGuard;
