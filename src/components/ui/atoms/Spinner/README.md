# Spinner Atom Component

Icon loading, chờ – hỗ trợ variant, theme, label, a11y.

## Props

- `size`: sm | md | lg | number
- `color`: Màu spinner
- `label`: Label dưới spinner
- `hideLabel`: Ẩn label
- ...Toàn bộ props <div>

## Variants

- `SpinnerDots`: Spinner ba chấm nhấp nháy
- `SpinnerOverlay`: Overlay spinner giữa màn hình

## Theme

- Có Light/Dark, glass effect, shadow dễ custom.

## Sử dụng

```tsx
import { Spinner } from "@/components/atoms/Spinner";
<Spinner size="lg" color="#2563eb" label="Đang xử lý..." />

import SpinnerDots from "@/components/atoms/Spinner/variants/SpinnerDots";
<SpinnerDots />

import SpinnerOverlay from "@/components/atoms/Spinner/variants/SpinnerOverlay";
<SpinnerOverlay />
