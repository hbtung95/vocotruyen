# ListItem Molecule

Một item cho danh sách/sidebar/menu/bảng – có thể có icon, label, mô tả, action, trạng thái chọn/disable, chuẩn Liquid Glass UI.

## Props

| Prop        | Type        | Required | Description                       |
|-------------|-------------|----------|-----------------------------------|
| icon        | ReactNode   | ❌       | Icon đầu dòng                     |
| label       | string      | ✔️       | Nội dung chính                    |
| description | string      | ❌       | Mô tả phụ                          |
| selected    | boolean     | ❌       | Đang được chọn                     |
| disabled    | boolean     | ❌       | Vô hiệu hoá, không cho click       |
| actions     | ReactNode   | ❌       | Action phụ (button/switch/menu)    |
| onClick     | () => void  | ❌       | Hàm khi click vào item             |
| className   | string      | ❌       | Custom class                       |
| tabIndex    | number      | ❌       | Tab order (a11y)                   |

## Example

```tsx
<ListItem
  icon={<Icon name="user" />}
  label="Admin"
  description="Quản trị toàn bộ hệ thống"
  selected
  actions={<button className="text-xs">Sửa</button>}
/>
