import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI) {
  plop.setGenerator("component", {
    description: "Adds a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{camelCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/react-component.hbs",
      },
      {
        type: "add",
        path: "src/{{camelCase name}}/index.ts",
        templateFile: "templates/index-barrel.hbs",
      },
      {
        type: "append",
        path: "package.json",
        pattern: /"exports": {(?<insertion>)/g,
        template: `   "./{{camelCase name}}": {
      "types": "./dist/{{camelCase name}}/{{pascalCase name}}.d.ts",
      "import": "./dist/{{camelCase name}}/{{pascalCase name}}.mjs",
      "require": "./dist/{{camelCase name}}/{{pascalCase name}}.js"
    },`,
      },
    ],
  });
}
