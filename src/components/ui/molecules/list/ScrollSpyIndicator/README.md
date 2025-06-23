# ScrollSpyIndicator Molecule

Hiển thị vị trí hiện tại khi cuộn trong danh sách/table (table of content, sidebar...).

## Props

| Prop           | Type          | Required | Description                         |
|----------------|---------------|----------|-------------------------------------|
| sections       | SpySection[]  | ✔️       | Danh sách section (id, label)       |
| currentId      | string        | ❌       | Section đang active                 |
| onSectionClick | (id)=>void    | ❌       | Gọi khi chọn 1 section              |
| vertical       | boolean       | ❌       | Dọc/thẳng hàng                      |
| indicatorColor | string        | ❌       | Màu bar indicator                   |
| className      | string        | ❌       | Custom className                    |

## Example

```tsx
<ScrollSpyIndicator
  sections={[
    { id: "info", label: "Thông tin" },
    { id: "athletes", label: "VĐV" },
  ]}
  currentId="athletes"
  onSectionClick={setCurrent}
/>
