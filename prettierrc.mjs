/** @type {import("prettier").Config} */
export default {
  useTabs: true,
  singleQuote: true,
  trailingComma: "none",
  semi: false,
  printWidth: 100,
  pluginSearchDirs: false,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
