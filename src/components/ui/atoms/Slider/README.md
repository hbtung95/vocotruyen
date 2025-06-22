# Slider Atom Component

Thanh kéo giá trị (range) chuẩn UX, hỗ trợ label, theme, min/max, variant.

## Props

- `value`: Giá trị hiện tại (bắt buộc)
- `label`: Nhãn
- `min`, `max`, `step`: Min/max/step
- `showValue`: Hiển thị số
- `disabled`: Vô hiệu hoá
- ...Toàn bộ props <input type="range">

## Variants

- `SliderRange`: Có min/max
- `SliderVertical`: Slider dựng dọc

## Theme

- Có Light/Dark, glass effect, thumb style dễ custom.

## Sử dụng

```tsx
import { Slider } from "@/components/atoms/Slider";
<Slider value={20} min={0} max={100} label="Volume" />

import SliderRange from "@/components/atoms/Slider/variants/SliderRange";
<SliderRange value={30} min={0} max={100} label="Mức độ" />

import SliderVertical from "@/components/atoms/Slider/variants/SliderVertical";
<SliderVertical value={60} min={0} max={100} label="Dọc" />
