import React from "react";
import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={clsx(
    "bg-glass p-6 md:p-8 shadow-glass rounded-3xl border border-white/20",
    className
  )}>
    {children}
  </div>
);

export default Card;
