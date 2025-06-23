# Backdrop Atom Component

Overlay nền mờ cho modal, popover, loading, hỗ trợ hiệu ứng glass MacOS, custom color, opacity, z-index, click.

## Props

- `open`: Hiển thị hay không (mặc định true)
- `color`: Màu nền overlay (mặc định glass MacOS)
- `opacity`: Độ mờ (mặc định 0.5)
- `glass`: Hiệu ứng blur glass (mặc định true)
- `zIndex`: Ưu tiên lớp (default 50)
- `onClick`: Sự kiện click (để đóng modal, v.v.)
- ...Toàn bộ props `<div>`

## Sử dụng

```tsx
import Backdrop from "@/components/ui/atoms/Backdrop";
<Backdrop open onClick={() => setShow(false)} />
