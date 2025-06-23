# TableFieldUsageStats Molecule

Hiển thị thông tin sử dụng từng trường/cột trong bảng: phần trăm dữ liệu đã điền, số lần sort/filter, trạng thái ẩn/hiện.

## Props

| Prop           | Type         | Required | Description                                  |
|----------------|--------------|----------|----------------------------------------------|
| label          | string       | ✔️       | Tên trường/cột                               |
| totalRows      | number       | ✔️       | Tổng số dòng trong table                      |
| nonEmptyRows   | number       | ✔️       | Số dòng field này đã có dữ liệu              |
| filteredCount  | number       | ❌       | Số lần dùng filter trên cột này               |
| sortedCount    | number       | ❌       | Số lần dùng sort trên cột này                 |
| isVisible      | boolean      | ❌       | Cột này đang hiển thị? (default: true)        |
| onToggleVisible| (boolean)=>void | ❌   | Gọi khi đổi trạng thái ẩn/hiện cột           |
| className      | string       | ❌       | Custom className                              |

## Example

```tsx
<TableFieldUsageStats
  label="Ghi chú"
  totalRows={120}
  nonEmptyRows={60}
  sortedCount={2}
  filteredCount={3}
  isVisible={true}
  onToggleVisible={v => alert(v ? "Show" : "Hide")}
/>
