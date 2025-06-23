# TableStatsWidget Molecule

Hiển thị các thống kê nhanh cho table: tổng dòng, tổng điểm, trung bình, phần trăm đạt...

## Props

| Prop      | Type        | Required | Description                            |
|-----------|-------------|----------|----------------------------------------|
| stats     | StatItem[]  | ✔️       | Danh sách thống kê                     |
| loading   | boolean     | ❌       | Đang loading                           |
| className | string      | ❌       | Custom className                       |

## StatItem

| key      | string      | Định danh           |
| label    | string      | Nhãn                |
| value    | ReactNode   | Giá trị thống kê    |
| icon     | ReactNode   | Icon                |
| color    | string      | Màu sắc tuỳ chọn    |
| tooltip  | string      | Tooltip (nếu có)    |

## Example

```tsx
<TableStatsWidget
  stats={[
    { key: "total", label: "Tổng dòng", value: 100 },
    { key: "avg", label: "Điểm TB", value: 8.12, icon: <IconStar /> },
    { key: "pass", label: "% Đạt", value: "87%", color: "#18a51b" },
  ]}
/>
