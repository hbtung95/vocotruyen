import React from "react";
import { ViewSwitcherProps } from "./ViewSwitcher.types";
import styles from "./themes/ViewSwitcher.module.css";
import { getCurrentView } from "./ViewSwitcher.utils";
import { useSwitchView } from "./ViewSwitcher.hooks";

const ViewSwitcher: React.FC<ViewSwitcherProps> = ({
  views,
  current,
  onSwitch,
  className = "",
  size = "md",
  variant = "tab",
}) => {
  const handleSwitch = useSwitchView(onSwitch);

  if (!views || views.length < 2) return null;

  if (variant === "segmented") {
    return (
      <div className={`${styles.segmentedBar} ${className}`}>
        {views.map(v => (
          <button
            key={v.key}
            className={`${styles.segBtn} ${size} ${current === v.key ? "active" : ""}`}
            onClick={() => handleSwitch(v.key)}
            aria-current={current === v.key}
            type="button"
            tabIndex={0}
          >
            {v.icon && <span>{v.icon}</span>}
            {v.label}
          </button>
        ))}
      </div>
    );
  }

  // Default: tab
  return (
    <div className={`${styles.switcherBar} ${className}`}>
      {views.map(v => (
        <button
          key={v.key}
          className={`${styles.tabBtn} ${size} ${current === v.key ? "active" : ""}`}
          onClick={() => handleSwitch(v.key)}
          aria-current={current === v.key}
          type="button"
          tabIndex={0}
        >
          {v.icon && <span>{v.icon}</span>}
          {v.label}
        </button>
      ))}
    </div>
  );
};

export default ViewSwitcher;
