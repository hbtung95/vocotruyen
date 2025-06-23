import { ImportFormat } from "./TableImportMenu.types";

export function getAcceptMime(fmt: ImportFormat): string {
  switch (fmt) {
    case "csv": return ".csv,text/csv";
    case "xlsx": return ".xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    case "json": return ".json,application/json";
    default: return "*/*";
  }
}
