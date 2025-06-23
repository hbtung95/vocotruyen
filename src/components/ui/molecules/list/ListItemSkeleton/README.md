# ListItemSkeleton Molecule

Skeleton loading cho ListItem. Có thể tuỳ biến số dòng, số actions, có icon hay không – chuẩn cho loading UI hiện đại.

## Props

| Prop         | Type    | Required | Description                         |
|--------------|---------|----------|-------------------------------------|
| withIcon     | boolean | ❌       | Hiện icon skeleton (default: true)  |
| actionsCount | number  | ❌       | Số action button giả (default: 0)   |
| lines        | number  | ❌       | Số dòng skeleton label (default: 1) |
| className    | string  | ❌       | Custom className                    |

## Example

```tsx
<ListItemSkeleton withIcon lines={2} actionsCount={1} />
