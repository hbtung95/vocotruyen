import React from "react";
import { ScrollSpyIndicatorProps } from "./ScrollSpyIndicator.types";
import styles from "./themes/ScrollSpyIndicator.module.css";
import { getActiveIndex } from "./ScrollSpyIndicator.utils";

const ScrollSpyIndicator: React.FC<ScrollSpyIndicatorProps> = ({
  sections,
  currentId,
  onSectionClick,
  vertical = false,
  indicatorColor = "#1677ff",
  className = "",
}) => {
  const activeIdx = getActiveIndex(sections, currentId);

  return (
    <nav
      className={`
        ${styles.scrollSpyWrap}
        ${vertical ? styles.vertical : ""}
        ${className}
      `}
      aria-label="ScrollSpy navigation"
      style={{ "--indicator-color": indicatorColor } as React.CSSProperties }
    >
      {sections.map((sec, idx) => (
        <button
          key={sec.id}
          className={`
            ${styles.sectionBtn}
            ${activeIdx === idx ? "active" : ""}
          `}
          onClick={() => onSectionClick && onSectionClick(sec.id)}
          aria-current={activeIdx === idx}
        >
          {sec.icon}
          {sec.label}
        </button>
      ))}
      {/* Indicator bar */}
      {!vertical && (
        <div
          className={styles.indicatorBar}
          style={{
            width: `${100 / sections.length}%`,
            transform: `translateX(${activeIdx * 100}%)`,
            background: indicatorColor,
          }}
        />
      )}
      {vertical && (
        <div
          className={styles.indicatorBar}
          style={{
            height: `${32 * sections.length}px`,
            transform: `translateY(${activeIdx * 32}px)`,
            background: indicatorColor,
            width: 3,
            position: "absolute",
            left: 0,
            top: 0,
          }}
        />
      )}
    </nav>
  );
};

export default ScrollSpyIndicator;
