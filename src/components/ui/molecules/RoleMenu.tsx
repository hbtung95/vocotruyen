import React from "react";
import Sidebar from "./Sidebar"; // <-- Đổi nếu export default
import type { Role } from "../../../types";

// Menu động từng role
const roleMenus: Record<Role, { label: string; link: string }[]> = {
  admin: [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Quản lý giải", link: "/manage-competition" },
    { label: "Quản lý VĐV", link: "/manage-athlete" }
  ],
  coach: [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Đăng ký giải", link: "/register" }
  ],
  referee: [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Chấm điểm", link: "/scoring" }
  ],
  user: [
    { label: "Dashboard", link: "/dashboard" }
  ],
  superadmin: [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Quản trị hệ thống", link: "/admin" }
  ]
};

const RoleMenu = ({ userRole }: { userRole: Role }) => (
  <Sidebar menu={roleMenus[userRole] || []} />
);

export default RoleMenu;
