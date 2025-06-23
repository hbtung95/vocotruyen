import React from "react";
import type { BreadcrumbProps } from "./Breadcrumb.types";

/**
 * Breadcrumb – Atom đường dẫn
 */
export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, separator = "/" }) => (
  <nav aria-label="Breadcrumb">
    <ol className="flex flex-wrap gap-1 items-center">
      {items.map((item, idx) => (
        <li key={item.label} className="flex items-center">
          {item.href
            ? <a href={item.href} className="text-accent hover:underline">{item.label}</a>
            : <span className="text-gray-500">{item.label}</span>
          }
          {idx < items.length - 1 && (
            <span className="mx-1 text-gray-400">{separator}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumb;
