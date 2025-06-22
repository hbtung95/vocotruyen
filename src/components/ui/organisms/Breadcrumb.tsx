import React from "react";
import { Link } from "react-router-dom";

type Item = { label: string; path?: string };
interface BreadcrumbProps {
  items: Item[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => (
  <nav className={`text-sm flex items-center gap-2 ${className}`}>
    {items.map((item, i) => (
      <span key={i} className="flex items-center gap-1">
        {item.path ? (
          <Link className="text-blue-600 hover:underline" to={item.path}>
            {item.label}
          </Link>
        ) : (
          <span className="text-gray-700 font-medium">{item.label}</span>
        )}
        {i < items.length - 1 && <span className="text-gray-400">/</span>}
      </span>
    ))}
  </nav>
);

export default Breadcrumb;
