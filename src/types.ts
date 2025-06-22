// src/types.ts
export type Role = "admin" | "coach" | "referee" | "user" | "superadmin";

export interface User {
  id: string;
  name: string;
  email: string;
  roles: Role[];      // Multi-role!
  avatar?: string;
  // ... các trường khác tùy backend trả về
}
