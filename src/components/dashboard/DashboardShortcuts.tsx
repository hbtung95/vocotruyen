import React from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { FiUserPlus, FiCalendar, FiUsers, FiBarChart2 } from "react-icons/fi";

const shortcuts = [
  { label: "Thêm vận động viên", icon: <FiUserPlus />, onClick: () => alert("Thêm VĐV") },
  { label: "Tạo giải đấu", icon: <FiCalendar />, onClick: () => alert("Tạo giải") },
  { label: "Quản lý CLB", icon: <FiUsers />, onClick: () => alert("Quản lý CLB") },
  { label: "Báo cáo nhanh", icon: <FiBarChart2 />, onClick: () => alert("Báo cáo") },
];

const DashboardShortcuts: React.FC = () => (
  <Card className="mb-6">
    <div className="font-semibold text-blue-800 mb-3">Lối tắt nhanh</div>
    <div className="flex flex-wrap gap-4">
      {shortcuts.map((s, i) => (
        <Button
          key={i}
          variant="secondary"
          onClick={s.onClick}
          className="flex items-center gap-2 px-4 py-2 rounded-xl shadow-glass bg-white/60 hover:bg-blue-50 transition"
        >
          <span className="text-blue-500 text-xl">{s.icon}</span>
          {s.label}
        </Button>
      ))}
    </div>
  </Card>
);

export default DashboardShortcuts;
