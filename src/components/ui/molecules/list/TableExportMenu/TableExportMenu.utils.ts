import { ExportFormat } from "./TableExportMenu.types";

// Gợi ý label cho format xuất file
export function getExportLabel(fmt: ExportFormat) {
  switch (fmt) {
    case "csv": return "CSV (.csv)";
    case "xlsx": return "Excel (.xlsx)";
    case "json": return "JSON (.json)";
    case "pdf": return "PDF (.pdf)";
    default: return fmt.toUpperCase();
  }
}
