export function getViewLabel(view: { name: string; isDefault?: boolean }) {
  return view.isDefault ? `${view.name} (mặc định)` : view.name;
}
