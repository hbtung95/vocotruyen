# TableImageCell Molecule

Hiển thị ảnh/avatar/thumbnail trong cell bảng.  
Hỗ trợ multi, shape, fallback, tooltip, click xem lớn, error.

## Props

| Prop         | Type                    | Required | Description                    |
|--------------|-------------------------|----------|--------------------------------|
| images       | string[]&#124;ImageCellItem[] | ✔️ | Ảnh hoặc object chi tiết        |
| shape        | "circle"/"square"/"rounded" | ❌  | Kiểu bo góc (avatar/gallery)   |
| size         | number                  | ❌       | Kích thước px (default 38)     |
| multi        | boolean                 | ❌       | Cho nhiều ảnh/cell             |
| max          | number                  | ❌       | Hiện tối đa N ảnh              |
| fallback     | ReactNode               | ❌       | Fallback nếu lỗi               |
| onClickImage | (src, idx)=>void        | ❌       | Xem lớn, mở modal, ...         |
| className    | string                  | ❌       | Custom className               |

## Example

```tsx
<TableImageCell
  images={[
    "https://randomuser.me/api/portraits/men/45.jpg",
    "https://randomuser.me/api/portraits/women/52.jpg"
  ]}
  shape="circle"
  max={2}
/>
