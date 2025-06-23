# BulkSelectBar Molecule

Hiển thị thanh thao tác khi chọn nhiều dòng trong table (xóa, export, đổi trạng thái, ...).

## Props

| Prop            | Type           | Required | Description                       |
|-----------------|----------------|----------|-----------------------------------|
| selectedCount   | number         | ✔️       | Số dòng đang chọn                 |
| totalCount      | number         | ✔️       | Tổng số dòng                      |
| onClearSelection| ()=>void       | ✔️       | Callback xóa chọn                 |
| actions         | BulkAction[]   | ✔️       | Danh sách action hàng loạt        |
| className       | string         | ❌       | Custom className                  |

## BulkAction

| key      | string      | Định danh               |
| label    | string      | Nhãn action             |
| icon     | ReactNode   | Icon                    |
| onClick  | ()=>void    | Callback                |
| danger   | boolean     | Action nguy hiểm?       |
| disabled | boolean     | Bị disable?             |
| tooltip  | string      | Tooltip                 |

## Example

```tsx
<BulkSelectBar
  selectedCount={3}
  totalCount={12}
  onClearSelection={() => setSelected([])}
  actions={[
    { key: "delete", label: "Xóa", onClick: () => xóa(), danger: true },
    { key: "export", label: "Export", onClick: () => export() },
  ]}
/>
