// prettier.config.ts, .prettierrc.ts, prettier.config.mts, or .prettierrc.mts

import { type Config } from "prettier";

const config: Config = {
  printWidth: 100,
  useTabs: false,
  tabWidth: 2,
  trailingComma: "all",
  semi: true,
  singleQuote: false,
  quoteProps: 'as-needed',
  arrowParens: 'always',
  bracketSpacing: true
};

export default config;
