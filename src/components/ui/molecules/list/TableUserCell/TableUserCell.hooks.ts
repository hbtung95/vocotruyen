import { useMemo } from "react";
import { UserCellItem } from "./TableUserCell.types";

export function useUsers(users: UserCellItem[], max?: number) {
  return useMemo(() => (max ? users.slice(0, max) : users), [users, max]);
}
