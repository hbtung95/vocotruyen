# TableTagColumn Molecule

Hiển thị tag/status/label (icon, màu) ngay trong cell bảng.  
Tùy biến màu, multi-tag, tooltip.

## Props

| Prop      | Type         | Required | Description                    |
|-----------|--------------|----------|--------------------------------|
| tags      | string[]&#124;TagOption[] | ✔️ | Tag value hoặc tag option      |
| options   | TagOption[]  | ❌       | Mapping value->label/icon/color|
| multi     | boolean      | ❌       | Cho phép nhiều tag/cell        |
| max       | number       | ❌       | Hiện tối đa N tag, còn lại "+N"|
| className | string       | ❌       | Custom className               |

## TagOption

| value   | string      | Giá trị (key)           |
| label   | string      | Tên hiển thị            |
| color   | string      | Màu nền                 |
| icon    | ReactNode   | Icon minh hoạ           |
| tooltip | string      | Tooltip                 |

## Example

```tsx
<TableTagColumn
  tags={["a", "b"]}
  options={[
    { value: "a", label: "VIP", color: "#1c95f6", icon: <IconStar /> },
    { value: "b", label: "Khách", color: "#44bb77" },
  ]}
  max={3}
/>
