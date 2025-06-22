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
