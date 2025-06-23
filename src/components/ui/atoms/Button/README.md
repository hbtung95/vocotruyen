# Button Component

Button chuẩn Liquid Glass UI (MacOS 26 Tahoe), hỗ trợ dark/light, variant, loading, a11y...

## Props

- `children`: Nội dung hiển thị (bắt buộc)
- `variant`: 'primary' | 'secondary' | 'ghost' (mặc định: primary)
- `disabled`: Boolean (mặc định: false)
- `loading`: Boolean (mặc định: false)
- `onClick`: Function
- `aria-label`: String (bắt buộc nếu button chỉ có icon)
- `className`: String (tuỳ chỉnh style ngoài)

## Sử dụng

```tsx
import { Button } from "@/components/atoms/Button";

<Button variant="primary" onClick={...}>Đăng nhập</Button>
<Button variant="ghost" aria-label="Tìm kiếm"><SearchIcon /></Button>
# Button Variants & Themes

## Sử dụng
```tsx
import { ButtonPrimary } from "./variants/ButtonPrimary";
import { ButtonSecondary } from "./variants/ButtonSecondary";

<ButtonPrimary onClick={...}>Lưu lại</ButtonPrimary>
<ButtonSecondary loading>Đang xử lý...</ButtonSecondary>

---

**Ghi chú:**
- Bạn có thể thêm hoặc sửa các lớp Tailwind/@apply, hoặc thêm hiệu ứng glass bằng CSS tùy ý.
- Nếu dùng Tailwind JIT, có thể chuyển toàn bộ `@apply` sang Tailwind class trực tiếp trong className.
- Để theme động, bạn dùng Context + import dynamic cho module CSS (advanced).

Nếu cần thêm template cho variant ghost, icon, outline... hoặc tích hợp theme context, cứ hỏi nhé!

# Button Atom Component

Nút bấm chuẩn UI/UX – hỗ trợ variant, size, icon, loading, shape, theme, fullWidth, a11y.

## Props

| Prop       | Type                                              | Default   | Description                          |
|------------|---------------------------------------------------|-----------|--------------------------------------|
| `variant`  | `"primary" \| "secondary" \| "outline" \| "ghost" \| "link"` | `primary` | Kiểu nút                             |
| `size`     | `"sm" \| "md" \| "lg"`                            | `md`      | Kích thước nút                       |
| `iconLeft` | `React.ReactNode`                                 |           | Icon trái                            |
| `iconRight`| `React.ReactNode`                                 |           | Icon phải                            |
| `loading`  | `boolean`                                         | `false`   | Trạng thái loading                   |
| `disabled` | `boolean`                                         | `false`   | Vô hiệu hoá                          |
| `fullWidth`| `boolean`                                         | `false`   | Nút full chiều rộng                   |
| `shape`    | `"pill" \| "rounded" \| "square"`                 | `rounded` | Bo góc                               |
| ...        | ...                                               | ...       | Toàn bộ props `<button>`             |

## Variants

- **ButtonOutline**: Nút viền mảnh
- **ButtonGhost**: Nút không viền
- **ButtonLink**: Nút dạng link
- **IconButton**: Nút chỉ có icon

## Theme

- Có Light/Dark, glass effect, hover, active, focus, shadow dễ custom trong CSS module.

## Sử dụng

```tsx
import { Button } from "@/components/ui/atoms/Button";
<Button variant="primary" size="lg" loading>Đang gửi...</Button>

import ButtonOutline from "@/components/ui/atoms/Button/variants/ButtonOutline";
<ButtonOutline>Viền Outline</ButtonOutline>

import IconButton from "@/components/ui/atoms/Button/variants/IconButton";
<IconButton aria-label="Search">
  <svg width={20} height={20} fill="none" stroke="currentColor"><circle cx={10} cy={10} r={8}/></svg>
</IconButton>
