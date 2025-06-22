import React from "react";
import Sidebar from "../ui/Sidebar";
import NotificationCenter from "../ui/NotificationCenter";

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-white">
    <Sidebar role="admin" />
    <div className="flex-1 flex flex-col">
      <header className="flex items-center justify-between p-4 bg-white bg-opacity-70 shadow-glass">
        <h1 className="font-bold text-xl text-blue-700">🏆 Admin Dashboard</h1>
        <NotificationCenter />
      </header>
      <main className="flex-1 px-6 py-6">{children}</main>
    </div>
  </div>
);

export default AdminLayout;
