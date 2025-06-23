import React from "react";
import { BadgeProgressionTrackerProps } from "./BadgeProgressionTracker.types";
import styles from "./themes/BadgeProgressionTracker.module.css";

const BadgeProgressionTracker: React.FC<BadgeProgressionTrackerProps> = ({
  steps,
  currentStep = 0,
  progressPercent,
  className = "",
}) => {
  return (
    <div className={`flex flex-col items-center w-full ${className} ${styles.trackerWrap || ""}`}>
      <div className="flex items-center justify-between w-full mb-2">
        {steps.map((step, idx) => (
          <div key={step.label} className="flex flex-col items-center flex-1">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full
                ${step.achieved ? "bg-green-500 text-white" : "bg-gray-200 text-gray-400"}
                ${styles.badgeIcon || ""}`}
            >
              {step.icon || (step.achieved ? "✔" : idx + 1)}
            </div>
            <div className="mt-1 text-xs text-center truncate w-16">{step.label}</div>
            {step.achieved && step.dateAchieved && (
              <div className="text-[10px] text-green-600">{step.dateAchieved}</div>
            )}
          </div>
        ))}
      </div>
      {typeof progressPercent === "number" && (
        <div className="w-full h-2 rounded bg-gray-100">
          <div
            className="h-2 rounded bg-green-400 transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default BadgeProgressionTracker;
