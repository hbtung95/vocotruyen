import React from "react";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 flex flex-col">
    <header className="p-4 shadow-glass bg-white/80 flex items-center">
      <h1 className="font-bold text-2xl text-blue-800">📊 Dashboard Tổng Quan</h1>
    </header>
    <main className="flex-1 container mx-auto py-8">{children}</main>
  </div>
);

export default DashboardLayout;
