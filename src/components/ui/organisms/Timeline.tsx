import React from "react";

type Event = { time: string; label: string; desc?: string };

interface Props {
  events: Event[];
}

const Timeline: React.FC<Props> = ({ events }) => (
  <div className="relative pl-8">
    <div className="absolute left-2 top-0 bottom-0 w-1 bg-blue-200 rounded" />
    <ul className="space-y-8">
      {events.map((ev, i) => (
        <li key={i} className="relative">
          <div className="absolute left-[-15px] top-2 w-4 h-4 rounded-full bg-blue-400 border-2 border-white shadow" />
          <div className="ml-2">
            <div className="text-blue-800 font-bold">{ev.time}</div>
            <div className="text-base">{ev.label}</div>
            {ev.desc && <div className="text-blue-500 text-sm">{ev.desc}</div>}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Timeline;
