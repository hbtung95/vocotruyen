# BadgeProgressionTracker Molecule

Hiển thị tiến trình hoàn thành badge/cấp độ, phù hợp dashboard user, profile, milestone.

## Props

| Prop           | Type                      | Required | Description                         |
|----------------|---------------------------|----------|-------------------------------------|
| steps          | BadgeProgressionStep[]    | ✔️       | Danh sách các mốc badge             |
| currentStep    | number                    | ❌       | Vị trí mốc đã đạt gần nhất          |
| progressPercent| number                    | ❌       | % tiến trình tổng thể               |
| className      | string                    | ❌       | Custom CSS                          |

## BadgeProgressionStep

| Prop          | Type        | Required | Description         |
|---------------|-------------|----------|---------------------|
| label         | string      | ✔️       | Tên badge/mốc       |
| icon          | ReactNode   | ❌       | Icon đại diện badge |
| achieved      | boolean     | ✔️       | Đã đạt chưa         |
| dateAchieved  | string      | ❌       | Ngày đạt            |

## Example

```tsx
<BadgeProgressionTracker
  steps={[
    { label: "Beginner", achieved: true, dateAchieved: "2024-01-01" },
    { label: "Skilled", achieved: true, dateAchieved: "2024-03-12" },
    { label: "Expert", achieved: false },
    { label: "Master", achieved: false },
  ]}
  currentStep={2}
  progressPercent={50}
/>
