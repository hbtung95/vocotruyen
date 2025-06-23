import { AthleteCardProps } from "../AthleteCard.types";

// Kế thừa hoặc mở rộng nếu Compact cần props khác (thường sẽ reuse phần lớn)
export interface AthleteCardCompactProps
  extends Pick<AthleteCardProps, "id" | "name" | "avatarUrl" | "rank" | "onClick"> {
  highlight?: boolean; // ví dụ: trạng thái nổi bật chỉ riêng variant này
}
