# SmartFilterChips Molecule

Hiển thị các filter đang áp dụng dưới dạng chip (có thể xoá từng cái hoặc xoá tất cả).

## Props

| Prop        | Type         | Required | Description                       |
|-------------|--------------|----------|-----------------------------------|
| chips       | FilterChip[] | ✔️       | Danh sách filter đang áp dụng      |
| onRemove    | (key)=>void  | ✔️       | Gọi khi bấm xoá chip              |
| onClearAll  | ()=>void     | ❌       | Gọi khi bấm xoá tất cả            |
| className   | string       | ❌       | Custom className                   |

## FilterChip

| key        | string      | Định danh          |
| label      | string      | Nhãn lọc           |
| valueLabel | string      | Giá trị lọc        |

## Example

```tsx
<SmartFilterChips
  chips={[
    { key: "status", label: "Trạng thái", valueLabel: "Đang hoạt động" },
    { key: "score", label: "Điểm", valueLabel: "≥ 8.0" },
  ]}
  onRemove={key => removeFilter(key)}
  onClearAll={() => clearAll()}
/>
