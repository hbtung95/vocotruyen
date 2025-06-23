# ReorderHandle Molecule

Icon/khu vực kéo thả reorder thứ tự dòng (drag handle).  
Tùy biến icon, a11y, dùng lại cho table, list, card.

## Props

| Prop         | Type              | Required | Description                       |
|--------------|-------------------|----------|-----------------------------------|
| label        | string            | ❌       | aria-label, tooltip               |
| icon         | ReactNode         | ❌       | Custom icon                       |
| onMouseDown  | (event)=>void     | ❌       | Xử lý kéo thả bằng chuột          |
| onTouchStart | (event)=>void     | ❌       | Kéo trên mobile                   |
| className    | string            | ❌       | Custom className                  |
| tabIndex     | number            | ❌       | Tab index                         |
| disabled     | boolean           | ❌       | Disable handle                    |

## Example

```tsx
<ReorderHandle onMouseDown={handleDrag} />
<ReorderHandle icon={<span>⋮⋮</span>} label="Kéo dòng" />
