const fs = require("fs");
const path = require("path");

const atomsDir = path.resolve(__dirname, "../src/components/ui/atoms");
const indexFile = path.join(atomsDir, "index.ts");

const ignoreFolders = ["themes", "variants", "__tests__"];

function getExportFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let exports = [];
  for (const entry of entries) {
    if (entry.isDirectory() && !ignoreFolders.includes(entry.name)) {
      // Main export (eg. Avatar/Avatar.tsx)
      const mainFile = path.join(dir, entry.name, `${entry.name}.tsx`);
      if (fs.existsSync(mainFile)) {
        exports.push(`export { default as ${entry.name} } from "./${entry.name}/${entry.name}";`);
      }
      // Variant exports
      const variantDir = path.join(dir, entry.name, "variants");
      if (fs.existsSync(variantDir)) {
        fs.readdirSync(variantDir)
          .filter(f => f.endsWith(".tsx"))
          .forEach(f => {
            const base = f.replace(/\.tsx$/, "");
            exports.push(`export { default as ${base} } from "./${entry.name}/variants/${base}";`);
          });
      }
      // Special case for ICONS
      if (entry.name === "Icon") {
        exports.push(`export { ICONS } from "./Icon/icons";`);
      }
    }
  }
  return exports;
}

function genIndexFile() {
  const lines = getExportFiles(atomsDir);
  fs.writeFileSync(indexFile, lines.join("\n") + "\n");
  console.log(`Auto-generated: ${indexFile}`);
}

genIndexFile();
