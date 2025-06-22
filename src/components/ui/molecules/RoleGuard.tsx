import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { Role } from "../../../types";

type Props = {
  allowedRoles: Role[];
  children: React.ReactNode;
};

const RoleGuard: React.FC<Props> = ({ allowedRoles, children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (user.roles && allowedRoles.some(role => user.roles.includes(role))) return <>{children}</>;
  return <Navigate to="/unauthorized" replace />;
};

export default RoleGuard;
