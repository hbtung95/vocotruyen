import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

// Giả lập user (sau này sẽ lấy từ localStorage hoặc context auth)
const user = {
  name: "Hoàng Bá Tùng",
  role: "admin", // Có thể là "admin", "coach", "referee", "athlete"
};

const menus = {
  admin: [
    { label: "Quản lý giải đấu", link: "/manage-competition" },
    { label: "Quản lý VĐV", link: "/manage-athlete" },
    { label: "Quản lý CLB", link: "/manage-club" },
    { label: "Thống kê/Báo cáo", link: "/report" },
  ],
  coach: [
    { label: "Đăng ký giải", link: "/register-competition" },
    { label: "Quản lý đội/VĐV", link: "/manage-team" },
    { label: "Lịch thi đấu", link: "/schedule" },
  ],
  referee: [
    { label: "Chấm điểm", link: "/scoring" },
    { label: "Lịch trực", link: "/referee-schedule" },
  ],
  athlete: [
    { label: "Thông tin cá nhân", link: "/profile" },
    { label: "Lịch thi", link: "/my-schedule" },
    { label: "Kết quả", link: "/result" },
  ],
};

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleLogout = () => {
    // Xoá token/role (giả lập)
    alert("Bạn đã đăng xuất!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-tr from-[#e5edfa] via-[#eaf3fb] to-[#d6e7f7]">
      {/* Sidebar */}
      <aside className="w-64 min-h-screen bg-white/70 border-r border-blue-100 p-6 flex flex-col gap-4">
        <div className="mb-8 flex flex-col items-center">
          <img
            src="/Logo.png"
            alt="Logo"
            className="w-14 h-14 rounded-xl shadow-lg bg-white/70 border border-blue-100 mb-2"
          />
          <div className="font-bold text-blue-800 text-lg">VOCOTRUYEN</div>
        </div>
        <div className="flex flex-col gap-2">
          {(menus[user.role as keyof typeof menus] || []).map((item, idx) => (
            <Link
               to={item.link}
               key={idx}
                className={
                  "px-4 py-2 rounded-lg font-medium transition " +
                (currentPath.startsWith(item.link)

                  ? "bg-blue-600 text-white shadow"
                  : "text-blue-700 hover:bg-blue-100")
              }
         >
              {item.label}
            </Link>

          ))}
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="w-full flex items-center justify-between bg-white/60 px-8 py-4 shadow">
          <div>
            <span className="font-semibold text-blue-900">Xin chào, {user.name}</span>
            <span className="ml-3 px-3 py-1 bg-blue-200/60 rounded-full text-blue-800 text-xs uppercase font-bold">
              {user.role}
            </span>
          </div>
          <button
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow font-semibold"
            onClick={handleLogout}
          >
            Đăng xuất
          </button>
        </header>

        {/* Content */}
        <main className="flex-1 flex flex-col items-center justify-center">
          <div className="max-w-lg p-8 bg-white/70 rounded-2xl shadow-xl mt-12 text-center">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Chào mừng {user.name}!</h2>
            <p className="text-blue-900 mb-4">
              Đây là dashboard {user.role === "admin"
                ? "Quản trị viên"
                : user.role === "coach"
                ? "HLV/CLB"
                : user.role === "referee"
                ? "Trọng tài"
                : "VĐV"}.<br />
              Hãy chọn chức năng trong menu bên trái để bắt đầu.
            </p>
            <img src="/Logo.png" alt="Logo" className="mx-auto w-20 h-20 rounded-xl opacity-60" />
          </div>
        </main>
      </div>
    </div>
  );
}
