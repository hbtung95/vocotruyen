import React from "react";

type Props = {
  steps: string[];
  active: number;
};

const Stepper: React.FC<Props> = ({ steps, active }) => (
  <div className="flex gap-2 items-center">
    {steps.map((step, i) => (
      <React.Fragment key={i}>
        <div className={`rounded-full border-2 ${i === active ? "border-blue-500 bg-blue-500 text-white" : "border-blue-200 bg-white text-blue-700"} w-7 h-7 flex items-center justify-center font-bold shadow`}>
          {i + 1}
        </div>
        <span className={`${i === active ? "text-blue-700" : "text-gray-400"} text-sm font-semibold`}>{step}</span>
        {i < steps.length - 1 && <div className="w-8 h-1 bg-blue-100 rounded mx-1" />}
      </React.Fragment>
    ))}
  </div>
);

export default Stepper;
