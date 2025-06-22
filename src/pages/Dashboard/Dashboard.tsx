import React from "react";
import DashboardStats from "../../components/dashboard/DashboardStats";
import DashboardChart from "../../components/dashboard/DashboardChart";
import DashboardTimeline from "../../components/dashboard/DashboardTimeline";
import DashboardShortcuts from "../../components/dashboard/DashboardShortcuts";

const Dashboard: React.FC = () => {
  // Bạn có thể fetch dữ liệu thật ở đây (dùng useEffect)
  return (
    <div className="p-4 space-y-8">
      <DashboardStats />
      <DashboardChart />
      <DashboardShortcuts />
      <DashboardTimeline />
    </div>
  );
};

export default Dashboard;
