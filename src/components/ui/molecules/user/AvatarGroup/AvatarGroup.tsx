import React from "react";
import { AvatarGroupProps } from "./AvatarGroup.types";
import { Avatar } from "@/components/ui/atoms/Avatar";

const AvatarGroup: React.FC<AvatarGroupProps> = ({
  avatars,
  maxVisible = 5,
  size = "md",
  showMoreLabel,
  className = "",
}) => {
  const visibleAvatars = avatars.slice(0, maxVisible);
  const extraCount = avatars.length - maxVisible;

  return (
    <div className={`flex items-center space-x-[-10px] ${className}`}>
      {visibleAvatars.map((item, idx) => (
        <div
          key={item.id || idx}
          className={`ring-2 ring-white dark:ring-bg-dark rounded-full overflow-hidden`}
          style={{ zIndex: 10 - idx }}
        >
          <Avatar
            src={item.src}
            alt={item.alt}
            size={size}
            bordered={false}
            {...(item.status ? { status: item.status } : {})}
          />
        </div>
      ))}
      {extraCount > 0 && (
        <span
          className="flex items-center justify-center bg-gray-300 text-xs font-semibold text-gray-700 rounded-full border border-white dark:border-bg-dark"
          style={{ width: 32, height: 32, zIndex: 0 }}
        >
          {showMoreLabel
            ? showMoreLabel(extraCount)
            : `+${extraCount}`}
        </span>
      )}
    </div>
  );
};

export default AvatarGroup;
