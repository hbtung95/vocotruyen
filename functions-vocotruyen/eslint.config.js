import js from '@eslint/js';
import ts from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      // Tùy chọn thêm rules, ví dụ:
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];
