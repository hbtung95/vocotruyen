# AvatarGroup Molecule

Hiển thị nhóm avatar user, hỗ trợ giới hạn số hiển thị và custom label số còn lại. Dùng cho danh sách nhóm, project, team, ban tổ chức...

## Props

| Prop          | Type                                              | Required | Description                      |
|---------------|---------------------------------------------------|----------|----------------------------------|
| avatars       | AvatarItem[]                                      | ✔️       | Mảng avatar (src, alt, status)   |
| maxVisible    | number                                            | ❌       | Số avatar hiển thị tối đa        |
| size          | "sm" "md" "lg" number                             | ❌       | Kích thước avatar                |
| showMoreLabel | (count:number) => ReactNode                       | ❌       | Custom label số còn lại          |
| className     | string                                            | ❌       | Custom CSS                       |

## Example

```tsx
<AvatarGroup
  avatars={[
    { src: "/avatars/a1.png", alt: "Alice" },
    { src: "/avatars/a2.png", alt: "Bob" },
    { src: "/avatars/a3.png", alt: "Carol" },
    { src: "/avatars/a4.png", alt: "David" },
    { src: "/avatars/a5.png", alt: "Eve" },
  ]}
  maxVisible={3}
  showMoreLabel={(n) => <span>+{n} user</span>}
/>
