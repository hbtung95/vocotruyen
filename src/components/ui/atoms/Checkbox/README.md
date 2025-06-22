# Checkbox Atom Component

Checkbox a11y chuẩn Liquid Glass UI – hỗ trợ trạng thái indeterminate, bo góc, theme.

## Props

- `label`: Nhãn
- `checked`: Boolean
- `indeterminate`: Trạng thái trung gian
- `disabled`: Vô hiệu hóa
- `onChange`: Sự kiện thay đổi
- `className`: Tuỳ chỉnh style ngoài

## Variants

- `CheckboxRounded`: Bo tròn
- `CheckboxIndeterminate`: Trung gian (gạch ngang)

## Theme

- Hỗ trợ Light/Dark, có thể custom thêm

## Sử dụng

```tsx
import { Checkbox } from "@/components/atoms/Checkbox";
<Checkbox label="Tôi xác nhận" />
