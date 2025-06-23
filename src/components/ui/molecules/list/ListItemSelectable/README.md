# ListItemSelectable Molecule

Item cho danh sách có thể chọn (checkbox/multi-select), thích hợp cho table, filter, sidebar...

## Props

| Prop            | Type        | Required | Description                       |
|-----------------|-------------|----------|-----------------------------------|
| icon            | ReactNode   | ❌       | Icon đầu dòng                     |
| label           | string      | ✔️       | Nội dung chính                    |
| description     | string      | ❌       | Mô tả phụ                          |
| checked         | boolean     | ❌       | Đang được chọn/checked             |
| disabled        | boolean     | ❌       | Vô hiệu hoá, không cho chọn        |
| actions         | ReactNode   | ❌       | Action phụ (button/switch/menu)    |
| onChange        | (checked:boolean) => void | ❌ | Gọi khi đổi trạng thái chọn   |
| className       | string      | ❌       | Custom class                       |
| tabIndex        | number      | ❌       | Tab order (a11y)                   |
| checkboxAriaLabel | string    | ❌       | Label cho checkbox (a11y)          |

## Example

```tsx
<ListItemSelectable
  icon={<Icon name="user" />}
  label="VĐV tiêu biểu"
  checked={true}
  onChange={checked => alert(checked)}
/>
