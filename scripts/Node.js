const fs = require("fs");
const path = require("path");

const ENTITY_DIR = path.join(__dirname, "../src/components/ui/molecules/entities");

function validateProps(entity, file) {
  const filePath = path.join(ENTITY_DIR, entity, file);
  if (!fs.existsSync(filePath)) return false;
  const content = fs.readFileSync(filePath, "utf-8");
  // Check if there's an interface named EntityProps
  const entityInterface = new RegExp(`interface\\s+${entity}Props`, "g");
  if (!entityInterface.test(content)) {
    console.error(`❌ ${entity}: Missing or incorrect interface in ${file}`);
    return false;
  }
  return true;
}

function checkREADMEProps(entity) {
  // Parse types file
  const typesPath = path.join(ENTITY_DIR, entity, `${entity}.types.ts`);
  const readmePath = path.join(ENTITY_DIR, entity, "README.md");
  if (!fs.existsSync(typesPath) || !fs.existsSync(readmePath)) return;

  const typesContent = fs.readFileSync(typesPath, "utf-8");
  const readmeContent = fs.readFileSync(readmePath, "utf-8");

  const propRegex = /^\s*(\w+)\??:\s*([\w\[\]\{\}<>|\s"'`]+)/gm;
  let typesProps = [];
  let match;
  while ((match = propRegex.exec(typesContent))) {
    typesProps.push(match[1]);
  }

  // Readme table parse
  const readmePropRegex = /^\|\s*(\w+)\s*\|/gm;
  let readmeProps = [];
  while ((match = readmePropRegex.exec(readmeContent))) {
    readmeProps.push(match[1]);
  }

  const missing = typesProps.filter((p) => !readmeProps.includes(p));
  if (missing.length > 0) {
    console.warn(`⚠️ ${entity}: README.md missing props: ${missing.join(", ")}`);
  }
}

function checkStorybookControls(entity) {
  const storyPath = path.join(ENTITY_DIR, entity, `${entity}.stories.tsx`);
  if (!fs.existsSync(storyPath)) return;
  const content = fs.readFileSync(storyPath, "utf-8");
  if (!content.includes("args")) {
    console.warn(`⚠️ ${entity}: stories.tsx missing 'args' (controls/props)!`);
  }
}

function main() {
  const entities = fs.readdirSync(ENTITY_DIR).filter(
    (d) => fs.lstatSync(path.join(ENTITY_DIR, d)).isDirectory()
  );
  entities.forEach(entity => {
    validateProps(entity, `${entity}.types.ts`);
    checkREADMEProps(entity);
    checkStorybookControls(entity);
    // TODO: Thêm check cho variants như trên nếu cần
  });
  console.log("✅ Nâng cấp kiểm tra props/types/README/storybook đã chạy xong!");
}

main();
