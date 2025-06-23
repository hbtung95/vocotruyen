# ViewSwitcher Molecule

Chuyển nhanh giữa nhiều chế độ hiển thị (List, Table, Kanban, Calendar...)  
Hỗ trợ tab, segmented, icon, active, a11y.

## Props

| Prop      | Type            | Required | Description                   |
|-----------|-----------------|----------|-------------------------------|
| views     | SwitchView[]    | ✔️       | Danh sách view                |
| current   | string          | ✔️       | Key view đang chọn            |
| onSwitch  | (key)=>void     | ✔️       | Gọi khi đổi view              |
| className | string          | ❌       | Custom className              |
| size      | "sm"&#124;"md"&#124;"lg" | ❌ | Cỡ nút                        |
| variant   | "tab"&#124;"segmented" | ❌ | Kiểu tab/segmented            |

## Example

```tsx
<ViewSwitcher
  views={[
    { key: "list", label: "Danh sách", icon: <IconList /> },
    { key: "kanban", label: "Kanban", icon: <IconKanban /> },
  ]}
  current="kanban"
  onSwitch={setView}
/>
