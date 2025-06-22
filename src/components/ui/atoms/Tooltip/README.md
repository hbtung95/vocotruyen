# Tooltip Atom Component

Tooltip hover/focus – hỗ trợ vị trí, variant, delay, icon, theme.

## Props

- `content`: Nội dung tooltip
- `children`: Element để hover/focus
- `position`: top | right | bottom | left
- `delay`: Độ trễ ms
- `disabled`: Vô hiệu hoá
- ...Toàn bộ props <span>

## Variants

- `TooltipInfo`: Tooltip icon info
- `TooltipError`: Tooltip icon error

## Theme

- Có Light/Dark, glass effect, shadow dễ custom.

## Sử dụng

```tsx
import { Tooltip } from "@/components/atoms/Tooltip";
<Tooltip content="Hỗ trợ">Hover vào</Tooltip>

import TooltipInfo from "@/components/atoms/Tooltip/variants/TooltipInfo";
<TooltipInfo text="Thông tin thêm" />

import TooltipError from "@/components/atoms/Tooltip/variants/TooltipError";
<TooltipError text="Có lỗi!" />
