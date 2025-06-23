# TableQuickChart Molecule

Hiển thị biểu đồ nhanh cho bảng: bar, column, line, donut, sparkline...

## Props

| Prop       | Type            | Required | Description                       |
|------------|-----------------|----------|-----------------------------------|
| type       | "bar"&#124;"line"&#124;"column"&#124;"donut"&#124;"spark" | ✔️ | Loại biểu đồ   |
| data       | QuickChartDataPoint[] | ✔️  | Dữ liệu                           |
| height     | number          | ❌       | Chiều cao chart                   |
| width      | number          | ❌       | Chiều rộng chart                  |
| title      | ReactNode       | ❌       | Tiêu đề chart                     |
| showLegend | boolean         | ❌       | Hiện chú thích                    |
| className  | string          | ❌       | Custom className                  |

## Example

```tsx
<TableQuickChart
  type="donut"
  data={[
    { label: "Nam", value: 23 },
    { label: "Nữ", value: 27 },
    { label: "Khác", value: 2 },
  ]}
  title="Tỷ lệ giới tính"
  showLegend
/>
