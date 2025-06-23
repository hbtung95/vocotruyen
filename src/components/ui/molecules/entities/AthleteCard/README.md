# AthleteCard

Hiển thị chi tiết Vận động viên, chuẩn Liquid Glass UI.

## Props

| Tên       | Kiểu   | Mô tả                              |
|-----------|--------|-------------------------------------|
| id        | string | ID unique                          |
| name      | string | Tên vận động viên                   |
| avatarUrl | string | URL ảnh đại diện                    |
| club      | string | Tên CLB                             |
| rank      | string | Hạng                                |
| medals    | object | {gold, silver, bronze}              |
| stats     | object | Thống kê bổ sung                    |
| isActive  | bool   | Có đang nổi bật                     |
| onClick   | func   | Xử lý click                         |

## Variants

- **AthleteCardCompact:** Dạng thu gọn, hiển thị tối giản
- ...

## Sử dụng

```tsx
import { AthleteCard } from "@/components/ui/molecules/entities/AthleteCard";
<AthleteCard ...props />
