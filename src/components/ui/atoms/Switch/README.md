# Switch Atom Component

Công tắc bật/tắt (toggle) – chuẩn a11y, hỗ trợ theme, variant icon.

## Props

- `label`: Nhãn phải
- `checked`: Đang bật
- `disabled`: Vô hiệu hoá
- ...Toàn bộ props <input type="checkbox">

## Variants

- `SwitchIcon`: Công tắc có icon trạng thái (ví dụ sun/moon)

## Theme

- Có Light/Dark, glass effect, shadow dễ custom.

## Sử dụng

```tsx
import { Switch } from "@/components/atoms/Switch";
<Switch label="Cho phép thông báo" checked />

import SwitchIcon from "@/components/atoms/Switch/variants/SwitchIcon";
<SwitchIcon checked={true} label="Dark mode" />
