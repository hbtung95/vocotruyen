import React from "react";
import { ListItemSkeletonProps } from "./ListItemSkeleton.types";
import { range } from "./ListItemSkeleton.utils";
import { useRandomWidth } from "./ListItemSkeleton.hooks";
import styles from "./themes/ListItemSkeleton.module.css";

const ListItemSkeleton: React.FC<ListItemSkeletonProps> = ({
  withIcon = true,
  actionsCount = 0,
  lines = 1,
  className = "",
}) => {
  const randomWidth = useRandomWidth();
  return (
    <div
      className={`
        flex items-center w-full gap-3 px-4 py-2 rounded-xl ${styles.skeletonItem} ${className}
      `}
      aria-label="Đang tải dữ liệu"
    >
      {withIcon && (
        <div
          className={`w-7 h-7 rounded-full ${styles.skeletonPulse}`}
          style={{ minWidth: 28 }}
        />
      )}
      <div className="flex-1 min-w-0 flex flex-col gap-1">
        {range(lines).map(i => (
          <div
            key={i}
            className={`h-3 rounded ${styles.skeletonPulse}`}
            style={{
              width: i === 0 ? randomWidth : useRandomWidth(60, 90),
              marginTop: i ? 2 : 0,
            }}
          />
        ))}
      </div>
      {range(actionsCount).map(i => (
        <div
          key={i}
          className={`w-7 h-7 rounded ${styles.skeletonPulse}`}
          style={{ minWidth: 28 }}
        />
      ))}
    </div>
  );
};

export default ListItemSkeleton;
