// src/layouts/AppLayout.tsx
import React from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-blue-200 via-white to-blue-100">
    <div className="w-full max-w-5xl mx-auto p-4">
      <header className="mb-8 flex justify-between items-center">
        <span className="font-bold text-2xl text-blue-700 drop-shadow">🏆 VoCoTruyen Webapp</span>
        {/* notification, user avatar, ... */}
        <div className="flex gap-4 items-center">
          <button className="bg-glass px-4 py-2 rounded-2xl shadow-glass">🔔</button>
          <img
            src="/Logo.png"
            alt="Avatar"
            className="w-10 h-10 rounded-full shadow border-2 border-white"
          />
        </div>
      </header>
      <main>
        {children}
      </main>
    </div>
  </div>
);

export default AppLayout;
