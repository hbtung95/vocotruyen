# Select Atom Component

Dropdown select chuẩn UX – hỗ trợ label, error, icon, search, theme, variant.

## Props

- `options`: [{ label, value, icon }]
- `value`: Giá trị đã chọn
- `label`: Nhãn
- `placeholder`: Placeholder
- `error`: Lỗi
- `withIcon`: Có icon trong option
- ...Toàn bộ props <select>

## Variants

- `SelectSearch`: Có filter
- `SelectIcon`: Option có icon

## Theme

- Có Light/Dark, glass effect dễ custom.

## Sử dụng

```tsx
import { Select } from "@/components/atoms/Select";
<Select label="Chọn nhóm" options={[{label:"A",value:"a"}]} />

import SelectSearch from "@/components/atoms/Select/variants/SelectSearch";
<SelectSearch options={[{label:"Apple",value:"apple"}]} />

import SelectIcon from "@/components/atoms/Select/variants/SelectIcon";
<SelectIcon options={[
  {label:"Admin",value:"admin",icon:<Icon name="user" />},
]} />
