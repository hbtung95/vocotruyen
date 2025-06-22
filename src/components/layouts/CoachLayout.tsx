import React from "react";
import Sidebar from "../ui/Sidebar";
import NotificationCenter from "../ui/NotificationCenter";

const CoachLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
    <Sidebar role="coach" />
    <div className="flex-1 flex flex-col">
      <header className="flex items-center justify-between p-4 bg-white bg-opacity-60 shadow-glass">
        <h1 className="font-bold text-xl text-purple-700">🏋️ Coach Portal</h1>
        <NotificationCenter />
      </header>
      <main className="flex-1 px-6 py-6">{children}</main>
    </div>
  </div>
);

export default CoachLayout;
