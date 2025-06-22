import React from "react";
import { Link, useLocation } from "react-router-dom";

interface MenuItem {
  label: string;
  link: string;
  icon?: React.ReactNode;
}

interface SidebarProps {
  menu: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menu }) => {
  const location = useLocation();
  return (
    <aside className="bg-white/90 glass rounded-2xl shadow p-5 w-60 min-h-[400px] flex flex-col gap-3">
      {menu.map(item => (
        <Link
          to={item.link}
          key={item.link}
          className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all ${
            location.pathname === item.link ? "bg-blue-100 text-blue-600 font-bold" : "hover:bg-blue-50"
          }`}
        >
          {item.icon}
          {item.label}
        </Link>
      ))}
    </aside>
  );
};

export { Sidebar };
export default Sidebar;
