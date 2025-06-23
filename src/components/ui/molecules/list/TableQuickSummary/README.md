# TableQuickSummary Molecule

Hiển thị dòng tổng hợp nhanh cuối bảng: tổng số dòng, tổng điểm, trung bình, min/max...

## Props

| Prop      | Type                | Required | Description                      |
|-----------|---------------------|----------|----------------------------------|
| fields    | QuickSummaryField[] | ✔️       | Danh sách fields tổng hợp        |
| loading   | boolean             | ❌       | Đang loading                     |
| className | string              | ❌       | Custom className                 |

## QuickSummaryField

| key      | string      | Tên field          |
| label    | string      | Nhãn header (nếu có) |
| value    | ReactNode   | Giá trị tổng hợp   |
| align    | "left"/"right"/"center" | Căn dòng |
| className| string      | Custom className   |
| tooltip  | string      | Tooltip (mô tả)    |

## Example

```tsx
<TableQuickSummary
  fields={[
    { key: "total", label: "Tổng số dòng", value: 50 },
    { key: "sum", label: "Tổng điểm", value: 401 },
    { key: "avg", label: "TB", value: 8.02 },
    { key: "max", label: "Max", value: 10, align: "center" },
  ]}
/>
