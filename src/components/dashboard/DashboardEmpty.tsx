import React from "react";
import Card from "../ui/Card";

const DashboardEmpty: React.FC<{ message?: string }> = ({ message }) => (
  <Card className="flex flex-col items-center justify-center h-64 text-slate-400">
    <svg width={72} height={72} fill="none" viewBox="0 0 24 24">
      <circle cx={12} cy={12} r={10} stroke="#3b82f6" strokeWidth={2} />
      <path d="M8 12h8M12 8v8" stroke="#3b82f6" strokeWidth={2} strokeLinecap="round" />
    </svg>
    <div className="mt-4 text-lg">{message || "Chưa có dữ liệu để hiển thị"}</div>
  </Card>
);

export default DashboardEmpty;
