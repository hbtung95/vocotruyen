# Breadcrumb Atom Component

Hiển thị đường dẫn điều hướng.

## Props

- `items`: Mảng label và href
- `separator`: Ký tự phân cách

## Sử dụng

```tsx
import Breadcrumb from "@/components/ui/atoms/Breadcrumb";
<Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: "Chi tiết" }]} />
