module.exports = function (plop) {
  plop.setGenerator("entity-variant", {
    description: "Tạo variant cho entity domain (chuẩn UI system)",
    prompts: [
      {
        type: "input",
        name: "entity",
        message: "Tên entity (Ví dụ: AthleteCard):"
      },
      {
        type: "input",
        name: "variant",
        message: "Tên variant (Ví dụ: Compact):"
      }
    ],
    actions: [
      // .tsx
      {
        type: "add",
        path: "src/components/ui/molecules/entities/{{entity}}/variants/{{entity}}{{variant}}.tsx",
        templateFile: "plop-templates/variant.tsx.hbs"
      },
      // .types.ts
      {
        type: "add",
        path: "src/components/ui/molecules/entities/{{entity}}/variants/{{entity}}{{variant}}.types.ts",
        templateFile: "plop-templates/variant.types.ts.hbs"
      },
      // .test.tsx
      {
        type: "add",
        path: "src/components/ui/molecules/entities/{{entity}}/variants/{{entity}}{{variant}}.test.tsx",
        templateFile: "plop-templates/variant.test.tsx.hbs"
      },
      // .stories.tsx
      {
        type: "add",
        path: "src/components/ui/molecules/entities/{{entity}}/variants/{{entity}}{{variant}}.stories.tsx",
        templateFile: "plop-templates/variant.stories.tsx.hbs"
      },
      // CSS module
      {
        type: "add",
        path: "src/components/ui/molecules/entities/{{entity}}/themes/{{entity}}{{variant}}.module.css",
        templateFile: "plop-templates/variant.module.css.hbs"
      }
    ]
  });
    plop.setHelper('variantLower', function (text) {
  return text.toLowerCase();
});
};
