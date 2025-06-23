# AccessLevelChip Molecule

Hiển thị quyền truy cập (access level) của user: Owner, Admin, Editor, Viewer, Guest, Read-only, Limited, Custom...

## Props

| Prop      | Type         | Required | Description             |
|-----------|--------------|----------|-------------------------|
| level     | AccessLevel  | ✔️       | Quyền truy cập          |
| className | string       | ❌       | Custom class (optional) |

## AccessLevel

"owner" | "admin" | "editor" | "viewer" | "guest" | "readonly" | "limited" | "custom"

## Example

```tsx
<AccessLevelChip level="editor" />
<AccessLevelChip level="readonly" className="ml-2" />
