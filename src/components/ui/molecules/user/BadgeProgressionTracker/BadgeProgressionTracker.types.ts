import { ReactNode } from "react";

export interface BadgeProgressionStep {
  label: string;            // Tên badge/mốc
  icon?: ReactNode;         // Icon đại diện badge
  achieved: boolean;        // Đã đạt được chưa
  dateAchieved?: string;    // Ngày đạt (nếu có)
}

export interface BadgeProgressionTrackerProps {
  steps: BadgeProgressionStep[]; // Danh sách các mốc badge
  currentStep?: number;          // Index mốc đang đạt gần nhất
  progressPercent?: number;      // % tiến trình tổng thể (nếu có)
  className?: string;
}
