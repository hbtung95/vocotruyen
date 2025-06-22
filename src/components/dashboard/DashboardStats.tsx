import React from "react";
import Card from "../ui/Card";
import { FiUsers, FiCalendar, FiAward, FiUserCheck } from "react-icons/fi";

type StatItem = {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
};

const stats: StatItem[] = [
  { label: "Tổng VĐV", value: 1284, icon: <FiUsers />, color: "bg-blue-500" },
  { label: "Số giải đấu", value: 48, icon: <FiCalendar />, color: "bg-teal-500" },
  { label: "CLB tham gia", value: 22, icon: <FiAward />, color: "bg-purple-500" },
  { label: "VĐV đăng ký mới", value: 37, icon: <FiUserCheck />, color: "bg-green-500" },
];

const DashboardStats: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
    {stats.map((s, i) => (
      <Card key={i} className="flex flex-col items-center justify-center py-5 glass shadow-glass">
        <div className={`rounded-full p-3 mb-2 text-white ${s.color}`}>{s.icon}</div>
        <div className="text-2xl font-bold text-blue-900">{s.value}</div>
        <div className="text-slate-500 text-sm">{s.label}</div>
      </Card>
    ))}
  </div>
);

export default DashboardStats;
