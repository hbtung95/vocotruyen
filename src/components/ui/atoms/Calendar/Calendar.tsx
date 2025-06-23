import React from "react";
import type { CalendarProps } from "./Calendar.types";
import styles from "./themes/CalendarLight.module.css";

/**
 * Calendar – Atom lịch đơn giản, props ngày, chọn ngày
 */
export const Calendar: React.FC<CalendarProps> = ({
  selected,
  onSelect,
  className,
}) => {
  // Giả lập lịch tháng hiện tại
  const today = new Date();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className={["grid grid-cols-7 gap-1 p-2", styles.calendar, className].join(" ")}>
      {days.map(day => (
        <button
          key={day}
          onClick={() => onSelect?.(new Date(today.getFullYear(), today.getMonth(), day))}
          className={[
            "rounded-lg w-8 h-8 flex items-center justify-center hover:bg-accent/10",
            selected?.getDate() === day ? "bg-accent text-white" : ""
          ].join(" ")}
        >
          {day}
        </button>
      ))}
    </div>
  );
};

export default Calendar;
