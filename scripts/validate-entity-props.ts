const { Project } = require("ts-morph");
const path = require("path");
const fs = require("fs");

const ENTITY_DIR = path.join(__dirname, "../src/components/ui/molecules/entities");

function getInterfaceProps(filePath, interfaceName) {
  const project = new Project();
  const sourceFile = project.addSourceFileAtPath(filePath);

  const iface = sourceFile.getInterface(interfaceName);
  if (!iface) {
    throw new Error(`Không tìm thấy interface: ${interfaceName} trong ${filePath}`);
  }
  return iface.getProperties().map(p => p.getName());
}

function getUsedPropsInComponent(filePath, propsName) {
  const project = new Project();
  const sourceFile = project.addSourceFileAtPath(filePath);
  // Giả sử bạn dùng destructuring: ({ prop1, prop2, ... }) => { ... }
  const fc = sourceFile.getFunctions().find(fn => fn.getName() === null); // default export
  if (!fc) return [];
  const params = fc.getParameters();
  if (!params.length) return [];
  const param = params[0];
  if (param.isDestructured()) {
    return param.getDestructuredProperties().map(dp => dp.getName());
  }
  return [];
}

function checkEntity(entity) {
  const typesPath = path.join(ENTITY_DIR, entity, `${entity}.types.ts`);
  const componentPath = path.join(ENTITY_DIR, entity, `${entity}.tsx`);

  if (!fs.existsSync(typesPath) || !fs.existsSync(componentPath)) return;
  const interfaceName = `${entity}Props`;

  // 1. Đọc toàn bộ props trong types
  let typeProps;
  try {
    typeProps = getInterfaceProps(typesPath, interfaceName);
  } catch (err) {
    console.error(`❌ [${entity}] ${err.message}`);
    return;
  }
  // 2. Đọc các props thực tế được sử dụng trong component
  let usedProps;
  try {
    usedProps = getUsedPropsInComponent(componentPath, interfaceName);
  } catch (err) {
    usedProps = [];
  }

  // 3. So sánh
  const missing = typeProps.filter(tp => !usedProps.includes(tp));
  const extra = usedProps.filter(up => !typeProps.includes(up));
  if (missing.length) {
    console.warn(`⚠️ [${entity}] Các props có trong types nhưng không destructure trong component: ${missing.join(", ")}`);
  }
  if (extra.length) {
    console.warn(`⚠️ [${entity}] Các props dùng trong component nhưng không có trong types: ${extra.join(", ")}`);
  }

  // 4. Tự động validate với stories
  const storiesPath = path.join(ENTITY_DIR, entity, `${entity}.stories.tsx`);
  if (fs.existsSync(storiesPath)) {
    const content = fs.readFileSync(storiesPath, "utf8");
    const usedInStories = typeProps.filter(prop => content.includes(prop + ":"));
    const missingInStories = typeProps.filter(prop => !usedInStories.includes(prop));
    if (missingInStories.length) {
      console.warn(`⚠️ [${entity}] Props không có trong default.args của storybook: ${missingInStories.join(", ")}`);
    }
  }
}

function main() {
  const entities = fs.readdirSync(ENTITY_DIR).filter(
    (d) => fs.lstatSync(path.join(ENTITY_DIR, d)).isDirectory()
  );
  entities.forEach(entity => {
    checkEntity(entity);
    // Có thể check variant tương tự bằng cách duyệt variants/ và tên interface phù hợp
  });
}
main();
