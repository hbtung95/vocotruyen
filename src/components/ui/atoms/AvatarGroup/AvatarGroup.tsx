import React from "react";
import type { AvatarGroupProps } from "./AvatarGroup.types";
import styles from "./themes/AvatarGroupLight.module.css";
import clsx from "clsx";

/**
 * AvatarGroup – Atom hiển thị nhóm avatar với overlap, tối ưu UI
 */
export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  avatars,
  max = 5,
  size = 32,
  overlap = -12,
  className,
  ...rest
}) => {
  const visible = avatars.slice(0, max);
  const hiddenCount = avatars.length - max;
  return (
    <div className={clsx("flex items-center", styles.group, className)} {...rest}>
      {visible.map((a, i) => (
        <img
          key={a.key || a.src || i}
          src={a.src}
          alt={a.alt || a.name || "avatar"}
          className={clsx(
            "rounded-full object-cover border-2 border-white shadow",
            styles.avatar
          )}
          style={{
            width: size,
            height: size,
            marginLeft: i === 0 ? 0 : overlap,
            zIndex: 10 + visible.length - i,
            background: "#eee",
          }}
        />
      ))}
      {hiddenCount > 0 && (
        <span
          className={clsx(
            "rounded-full bg-gray-200 text-gray-600 border-2 border-white flex items-center justify-center font-semibold shadow",
            styles.overflow
          )}
          style={{
            width: size,
            height: size,
            marginLeft: overlap,
            fontSize: size * 0.48,
            zIndex: 5,
          }}
          aria-label={`+${hiddenCount} người nữa`}
        >
          +{hiddenCount}
        </span>
      )}
    </div>
  );
};

export default AvatarGroup;
