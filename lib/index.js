module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "import",
    "unused-imports",
    "import-newlines",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ],
        moduleDirectory: [
          "node_modules",
          "src/",
        ],
      },
    },
  },
  rules: {
    "indent": [
      "error",
      2,
    ],
    "comma-dangle": [
      "error",
      "always-multiline",
    ],
    "array-bracket-newline": [
      "error",
      "always",
    ],
    "array-element-newline": [
      "error",
      "always",
    ],
    "semi": [
      "error",
      "always",
    ],
    "spaced-comment": [
      "error",
      "always",
    ],
    "unused-imports/no-unused-imports": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "import-newlines/enforce": [
      "error",
      {
        items: 1,
      },
    ],
    "import/order": [
      "warn",
      {
        groups: [
          [
            "builtin",
            "external",
          ],
          "internal",
          "parent",
          [
            "sibling",
            "index",
          ],
          "object",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    complexity: "warn",
    "no-console": [
      "error",
    ],
  },
};