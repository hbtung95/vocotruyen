# ProgressCircle Atom Component

Progress/loading vòng tròn (circular), tỉ lệ %, custom color, size, label.

## Props

- `value`: số 0–100, bắt buộc
- `size`: px (default 40)
- `thickness`: độ dày stroke (default 4)
- `color`: màu chủ đạo (default #1976d2)
- `showLabel`: hiện số % (default false)
- ...Toàn bộ props `<div>`

## Sử dụng

```tsx
import ProgressCircle from "@/components/ui/atoms/ProgressCircle";
<ProgressCircle value={68} showLabel />
<ProgressCircle value={34} color="#4caf50" size={48} />
