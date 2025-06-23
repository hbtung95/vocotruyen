const fs = require("fs");
const path = require("path");

const ENTITY_DIR = path.join(__dirname, "../src/components/ui/molecules/entities");

function genIndex(entity) {
  const entityPath = path.join(ENTITY_DIR, entity);
  let content = `export { default as ${entity} } from "./${entity}";\n`;
  content += `export * from "./${entity}.types";\n`;

  // Variants
  const variantsDir = path.join(entityPath, "variants");
  if (fs.existsSync(variantsDir)) {
    const files = fs.readdirSync(variantsDir);
    files.forEach((f) => {
      if (f.endsWith(".tsx") && !f.endsWith(".test.tsx") && !f.endsWith(".stories.tsx")) {
        const variant = f.replace(".tsx", "");
        content += `export { default as ${variant} } from "./variants/${variant}";\n`;
        const typeFile = f.replace(".tsx", ".types.ts");
        if (files.includes(typeFile)) {
          content += `export * from "./variants/${typeFile}";\n`;
        }
      }
    });
  }
  fs.writeFileSync(path.join(entityPath, "index.ts"), content);
  console.log(`✅ Auto-generated index.ts for ${entity}`);
}

function main() {
  const entities = fs.readdirSync(ENTITY_DIR).filter(
    (d) => fs.lstatSync(path.join(ENTITY_DIR, d)).isDirectory()
  );
  entities.forEach((entity) => genIndex(entity));
}

main();
