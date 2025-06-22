import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Card from "../ui/Card";

const sampleData = [
  { name: "T1", users: 120, competitions: 8 },
  { name: "T2", users: 150, competitions: 10 },
  { name: "T3", users: 180, competitions: 13 },
  { name: "T4", users: 200, competitions: 11 },
];

const DashboardChart: React.FC = () => (
  <Card className="mb-6">
    <h3 className="font-bold mb-4 text-blue-800">Thống kê hoạt động</h3>
    <ResponsiveContainer width="100%" height={240}>
      <LineChart data={sampleData} margin={{ top: 16, right: 16, left: 0, bottom: 0 }}>
        <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} name="Người dùng" />
        <Line type="monotone" dataKey="competitions" stroke="#f59e42" strokeWidth={2} name="Giải đấu" />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  </Card>
);

export default DashboardChart;
