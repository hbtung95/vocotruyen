// Validate required (simple)
export function requiredValidator(v: string | number) {
  if (v === null || v === undefined || v === "") return "Không được bỏ trống!";
  return undefined;
}
