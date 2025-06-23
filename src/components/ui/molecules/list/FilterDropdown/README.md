# FilterDropdown Molecule

Bộ lọc popup nhỏ gọn cho table/list – hỗ trợ single/multi-select, icon, disabled, align, a11y.

## Props

| Prop          | Type        | Required | Description                |
|---------------|-------------|----------|----------------------------|
| label         | string      | ❌       | Label nút dropdown         |
| icon          | ReactNode   | ❌       | Icon minh hoạ              |
| value         | any         | ❌       | Giá trị đã chọn            |
| options       | array       | ✔️      | Danh sách tuỳ chọn         |
| onChange      | (v)=>void   | ✔️      | Callback đổi giá trị       |
| multi         | boolean     | ❌       | Multi select               |
| placeholder   | string      | ❌       | Placeholder nếu chưa chọn  |
| className     | string      | ❌       | Custom className           |
| dropdownAlign | "left"/"right" | ❌    | Căn dropdown               |
| disabled      | boolean     | ❌       | Disable trigger            |

## Example

```tsx
<FilterDropdown
  label="Trạng thái"
  options={[{value:"ok", label:"Đạt"}]}
  value={val}
  onChange={setVal}
/>
