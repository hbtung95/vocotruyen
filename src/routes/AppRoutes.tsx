// src/routes/AppRoutes.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import ManageAthletes from "../pages/Dashboard/ManageAthletes";
import ManageClubs from "../pages/Dashboard/ManageClubs";
import DemoAdvancedUI from "../pages/DemoAdvancedUI";
import Unauthorized from "../pages/Unauthorized";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/dashboard" replace />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/manage-athletes" element={<ManageAthletes />} />
    <Route path="/manage-clubs" element={<ManageClubs />} />
    <Route path="/demo-ui" element={<DemoAdvancedUI />} />
    <Route path="/unauthorized" element={<Unauthorized />} />
    {/* CATCH-ALL: Nếu không khớp route nào, chuyển về dashboard hoặc trang 404 */}
    <Route path="*" element={<Navigate to="/dashboard" replace />} />
  </Routes>
);

export default AppRoutes;
