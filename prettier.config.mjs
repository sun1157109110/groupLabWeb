// /** @type {import('prettier').Config} */
// module.exports = {
//   endOfLine: "lf",
//   semi: false,
//   singleQuote: false,
//   tabWidth: 2,
//   trailingComma: "es5",
//   importOrder: [
//     "^(react/(.*)$)|^(react$)",
//     "^(next/(.*)$)|^(next$)",
//     "<THIRD_PARTY_MODULES>",
//     "",
//     "^types$",
//     "^@/types/(.*)$",
//     "^@/config/(.*)$",
//     "^@/lib/(.*)$",
//     "^@/hooks/(.*)$",
//     "^@/components/ui/(.*)$",
//     "^@/components/(.*)$",
//     "^@/styles/(.*)$",
//     "^@/app/(.*)$",
//     "",
//     "^[./]",
//   ],
//   importOrderSeparation: false,
//   importOrderSortSpecifiers: true,
//   importOrderBuiltinModulesToTop: true,
//   importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
//   importOrderMergeDuplicateImports: true,
//   importOrderCombineTypeAndValueImports: true,
//   plugins: ["@ianvs/prettier-plugin-sort-imports","prettier-plugin-tailwindcss"],
// }
/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@/types/(.*)$",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/components/(.*)$",
    "^@/styles/(.*)$",
    "^@/app/(.*)$",
    "",
    "^[./]",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: ["@ianvs/prettier-plugin-sort-imports","prettier-plugin-tailwindcss"],
};

export default config;
