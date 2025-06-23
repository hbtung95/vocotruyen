export interface PresenceIndicatorProps {
  status: "online" | "offline" | "busy" | "away";
  size?: number; // đường kính badge (px), mặc định 12
  className?: string;
  style?: React.CSSProperties;
  tooltip?: string; // Tooltip tuỳ chọn (vd: "Đang online")
}
