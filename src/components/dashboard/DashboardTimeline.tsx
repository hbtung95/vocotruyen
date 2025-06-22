import React from "react";
import Card from "../ui/Card";
import Timeline from "../ui/Timeline";

const mockEvents = [
  { time: "2024-06", label: "Tổ chức giải Pickleball La Gi mở rộng", desc: "Thành công với 200+ VĐV" },
  { time: "2024-04", label: "Ký hợp tác với Liên đoàn QG", desc: "Mở rộng mạng lưới các CLB" },
  { time: "2024-01", label: "Bổ sung hệ thống dashboard", desc: "Phát triển tính năng chuyên sâu" },
];

const DashboardTimeline: React.FC = () => (
  <Card>
    <h3 className="font-bold text-blue-800 mb-4">Dấu mốc phát triển hệ thống</h3>
    <Timeline events={mockEvents} />
  </Card>
);

export default DashboardTimeline;
