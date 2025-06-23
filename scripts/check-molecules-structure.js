const fs = require("fs");
const path = require("path");

const ENTITY_DIR = path.join(__dirname, "../src/components/ui/molecules/entities");

const requiredFiles = [
  "AthleteCard.tsx",
  "AthleteCard.types.ts",
  "AthleteCard.test.tsx",
  "AthleteCard.stories.tsx",
  "index.ts",
  "README.md",
  "themes"
];

const requiredVariantFiles = (entity, variant) => [
  `${entity}${variant}.tsx`,
  `${entity}${variant}.types.ts`,
  `${entity}${variant}.test.tsx`,
  `${entity}${variant}.stories.tsx`,
];

function checkEntity(entity) {
  const entityPath = path.join(ENTITY_DIR, entity);
  const files = fs.readdirSync(entityPath);

  // Kiểm tra các file bắt buộc của entity
  requiredFiles.forEach(f => {
    if (!files.includes(f) && !fs.existsSync(path.join(entityPath, f))) {
      console.error(`❌ Missing required file: ${entity}/${f}`);
      process.exit(1);
    }
  });

  // Kiểm tra folder variants (nếu có)
  const variantsDir = path.join(entityPath, "variants");
  if (fs.existsSync(variantsDir)) {
    const variantFiles = fs.readdirSync(variantsDir);
    variantFiles.forEach(f => {
      // Tìm các variant .tsx
      if (f.endsWith(".tsx") && !f.endsWith(".test.tsx") && !f.endsWith(".stories.tsx")) {
        const variant = f.replace(`${entity}`, "").replace(".tsx", "");
        requiredVariantFiles(entity, variant).forEach(vf => {
          if (!variantFiles.includes(vf)) {
            console.error(`❌ Missing variant file: ${entity}/variants/${vf}`);
            process.exit(1);
          }
        });
      }
    });
  }
}

function main() {
  const entities = fs.readdirSync(ENTITY_DIR).filter(
    (d) => fs.lstatSync(path.join(ENTITY_DIR, d)).isDirectory()
  );
  let ok = true;
  entities.forEach((entity) => {
    try {
      checkEntity(entity);
    } catch (err) {
      ok = false;
    }
  });
  if (ok) {
    console.log("✅ All entities/variants structure OK!");
  }
}
main();
