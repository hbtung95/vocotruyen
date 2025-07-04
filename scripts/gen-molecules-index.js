const fs = require("fs");
const path = require("path");

// Đường dẫn tới thư mục molecules
const MOLECULES_DIR = path.join(__dirname, "../src/components/ui/molecules");

// Tạo danh sách folder con (bỏ qua các file không phải folder)
const groups = fs.readdirSync(MOLECULES_DIR)
  .filter((name) => fs.statSync(path.join(MOLECULES_DIR, name)).isDirectory())
  .filter((name) => !name.startsWith("__")) // Bỏ qua thư mục mock/test tạm thời
  .sort();

const exportLines = groups.map((name) => `export * from "./${name}";`);

const outFile = path.join(MOLECULES_DIR, "index.ts");
fs.writeFileSync(
  outFile,
  "// Auto-generated by scripts/gen-molecules-index.js\n" +
  exportLines.join("\n") + "\n"
);

console.log("Generated molecules/index.ts:");
console.log(exportLines.join("\n"));
