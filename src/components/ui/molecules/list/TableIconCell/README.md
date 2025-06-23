# TableIconCell Molecule

Hiển thị icon/trạng thái trong cell bảng – hỗ trợ màu, tooltip, click action, multi icon, highlight.

## Props

| Prop        | Type              | Required | Description                |
|-------------|-------------------|----------|----------------------------|
| icons       | ReactNode[]&#124;IconCellItem[] | ✔️ | Danh sách icon hoặc item   |
| multi       | boolean           | ❌       | Cho nhiều icon/cell        |
| max         | number            | ❌       | Hiện tối đa N icon         |
| highlight   | boolean           | ❌       | Nổi bật                    |
| disabled    | boolean           | ❌       | Khoá cell (disabled)       |
| className   | string            | ❌       | Custom className           |

## IconCellItem

| icon    | ReactNode   | Icon (bắt buộc)             |
| color   | string      | Màu sắc icon                |
| tooltip | string      | Tooltip                     |
| onClick | ()=>void    | Click vào icon              |
| disabled| boolean     | Khóa click icon             |

## Example

```tsx
<TableIconCell
  icons={[
    { icon: <CheckIcon />, tooltip: "Thành công", color: "#31ba63" },
    { icon: <WarningIcon />, tooltip: "Cảnh báo", color: "#ffaa33" },
    { icon: <ErrorIcon />, tooltip: "Lỗi", color: "#e94f44" },
  ]}
  highlight
  max={2}
/>
