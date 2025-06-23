import React from "react";
import { TableUserCellProps } from "./TableUserCell.types";
import styles from "./themes/TableUserCell.module.css";
import { getUserInitial, getStatusColor } from "./TableUserCell.utils";
import { useUsers } from "./TableUserCell.hooks";

const TableUserCell: React.FC<TableUserCellProps> = ({
  users,
  multi = true,
  max = 3,
  avatarSize = 36,
  showEmail = false,
  showRole = false,
  showStatus = true,
  onClickUser,
  className = "",
}) => {
  const userList = useUsers(users, multi ? max : 1);
  if (!userList.length) return null;
  const showUsers = userList;
  const hiddenCount = users.length - showUsers.length;

  return (
    <div className={`${styles.userCellWrap} ${className}`} data-testid="table-user-cell">
      {showUsers.map((u, idx) => (
        <span
          key={u.id}
          className={styles.userBlock}
          tabIndex={onClickUser ? 0 : -1}
          title={u.tooltip || u.name}
          onClick={() => onClickUser?.(u, idx)}
          aria-label={u.tooltip}
        >
          <span
            className={styles.avatarBox}
            style={{ width: avatarSize, height: avatarSize }}
          >
            {u.avatar ? (
              <img
                className={styles.avatarImg}
                src={u.avatar}
                alt={u.name}
                style={{ width: avatarSize, height: avatarSize }}
                draggable={false}
              />
            ) : (
              getUserInitial(u.name)
            )}
            {showStatus && (
              <span
                className={styles.statusDot}
                style={{ background: getStatusColor(u.status) }}
                title={u.status}
              />
            )}
          </span>
          <span className={styles.infoBlock}>
            <span className={styles.userName}>{u.name}</span>
            {showEmail && u.email && <span className={styles.userEmail}>{u.email}</span>}
            {showRole && u.role && <span className={styles.userRole}>{u.role}</span>}
          </span>
        </span>
      ))}
      {multi && hiddenCount > 0 && (
        <span className={styles.moreBox} title={`+${hiddenCount} người`}>+{hiddenCount}</span>
      )}
    </div>
  );
};

export default TableUserCell;
