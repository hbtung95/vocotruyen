import React from "react";

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-50">
    <main className="max-w-3xl mx-auto py-10">{children}</main>
  </div>
);

export default BaseLayout;
