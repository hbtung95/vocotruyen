import React from "react";
import { Bell } from "lucide-react";

type Notification = {
  id: number;
  text: string;
  time: string;
  unread?: boolean;
};

interface Props {
  notifications: Notification[];
}

const NotificationHistory: React.FC<Props> = ({ notifications }) => (
  <div className="bg-white/90 glass rounded-xl p-4 min-w-[220px]">
    <div className="flex gap-2 mb-2 text-sm border-b pb-1">
      <span className="font-bold text-blue-600">Lịch sử</span>
      <span className="text-gray-400">({notifications.length})</span>
    </div>
    <div className="space-y-2 max-h-44 overflow-y-auto">
      {notifications.length === 0 && (
        <div className="text-gray-400 text-center py-4">Không có thông báo</div>
      )}
      {notifications.map(n => (
        <div key={n.id} className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-blue-400" />
          <div>
            <div className={n.unread ? "font-bold" : ""}>{n.text}</div>
            <div className="text-xs text-gray-500">{n.time}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default NotificationHistory;
