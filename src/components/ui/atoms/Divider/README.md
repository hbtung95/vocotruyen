# Divider Atom Component

Phân cách nội dung, hỗ trợ solid/dashed, dọc/ngang, đa theme.

## Props

- `orientation`: "horizontal" | "vertical"
- `dashed`: Đứt nét
- `thickness`: Độ dày
- `className`: Custom CSS

## Variants

- `DividerVertical`
- `DividerDashed`

## Theme

- Light/Dark, tuỳ chỉnh được.

## Sử dụng

```tsx
import { Divider } from "@/components/atoms/Divider";
<Divider />
<Divider orientation="vertical" />
<Divider dashed />
