import React from "react";
import Sidebar from "../ui/Sidebar";
import NotificationCenter from "../ui/NotificationCenter";

const RefereeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex min-h-screen bg-gradient-to-br from-yellow-50 via-white to-blue-50">
    <Sidebar role="referee" />
    <div className="flex-1 flex flex-col">
      <header className="flex items-center justify-between p-4 bg-white bg-opacity-60 shadow-glass">
        <h1 className="font-bold text-xl text-yellow-700">⚖️ Referee Workspace</h1>
        <NotificationCenter />
      </header>
      <main className="flex-1 px-6 py-6">{children}</main>
    </div>
  </div>
);

export default RefereeLayout;
