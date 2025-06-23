# TableCellActions Molecule

Các thao tác nhanh (nút Sửa/Xoá/Xem...) hiển thị trực tiếp trong cell bảng dữ liệu.

## Props

| Prop         | Type        | Required | Description                       |
|--------------|-------------|----------|-----------------------------------|
| actions      | CellAction[]| ✔️       | Danh sách action                  |
| orientation  | "horizontal"/"vertical" | ❌ | Kiểu hiển thị  |
| compact      | boolean     | ❌       | Nhỏ gọn hơn                       |
| className    | string      | ❌       | Custom className                  |

## CellAction

| key      | string      | Định danh              |
| label    | string      | Nhãn nút               |
| icon     | ReactNode   | Icon                   |
| onClick  | ()=>void    | Callback click         |
| danger   | boolean     | Có cảnh báo nguy hiểm? |
| disabled | boolean     | Bị disable?            |
| tooltip  | string      | Tooltip mô tả          |

## Example

```tsx
<TableCellActions
  actions={[
    { key: "edit", label: "Sửa", icon: <Icon name="edit" />, onClick: editFn },
    { key: "delete", label: "Xóa", icon: <Icon name="trash" />, danger: true, onClick: delFn },
  ]}
/>
