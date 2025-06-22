import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AutoRedirectByRole: React.FC = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  // Redirect về dashboard riêng theo vai trò
  if (user.roles?.includes("admin")) return <Navigate to="/dashboard" />;
  if (user.roles?.includes("coach")) return <Navigate to="/dashboard" />;
  // ... bổ sung các role khác
  return <Navigate to="/dashboard" />;
};
export default AutoRedirectByRole;
