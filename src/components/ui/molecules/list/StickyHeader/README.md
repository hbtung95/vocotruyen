# StickyHeader Molecule

Header dính trên cùng khi cuộn table/list.  
Tự động hiệu ứng bóng mờ khi đã "stick".

## Props

| Prop            | Type      | Required | Description                      |
|-----------------|-----------|----------|----------------------------------|
| children        | ReactNode | ✔️       | Nội dung header                  |
| top             | number    | ❌       | Sticky cách top mấy px           |
| zIndex          | number    | ❌       | Z-index ưu tiên                  |
| className       | string    | ❌       | Custom className                 |
| style           | object    | ❌       | Custom style                     |
| shadowOnScroll  | boolean   | ❌       | Có bóng khi stick                |

## Example

```tsx
<StickyHeader top={64}>
  <div className="border-b px-4 py-2 font-semibold">Header bảng</div>
</StickyHeader>
