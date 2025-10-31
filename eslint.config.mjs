import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Main JS config
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.node, // Node.js globals
    },
  },
  // CommonJS setting
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs", // for require/module.exports
    },
  },
  // Jest override for test files
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest, // describe, test, expect
      },
    },
  }
]);
