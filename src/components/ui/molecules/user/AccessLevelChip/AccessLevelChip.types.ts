export type AccessLevel =
  | "owner"
  | "admin"
  | "editor"
  | "viewer"
  | "guest"
  | "readonly"
  | "limited"
  | "custom";

export interface AccessLevelChipProps {
  level: AccessLevel;
  className?: string;
}
