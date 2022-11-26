module.exports = function (plop) {
  // COMPONENT
  plop.setGenerator("component", {
    description: "Create a component in the the components directory",
    prompts: [
      {
        name: "name",
        message: "Component name:",
        validate: function (value) {
          if (/.+/.test(value)) {
            return true;
          }
          return "name is required";
        },
      },
    ],
    actions: [
      // add {ComponentName}.tsx
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/components/component.txt",
      },
      // add {ComponentName}.module.css
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/components/component.txt",
      },
      // add {ComponentName}.test.tsx
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.cy.ts",
        templateFile: "templates/components/component.cy.txt",
      },
      // add index.js for import/exports
      {
        skipIfExists: true,
        type: "add",
        path: "src/components/index.ts",
        // template: "",
      },
      // append export
      {
        type: "append",
        unique: true,
        path: "src/components/index.ts",
        template:
          "export { default as {{pascalCase name}} } from './{{pascalCase name}}/{{pascalCase name}}'",
      },
    ],
  });

  // PAGE
  plop.setGenerator("page", {
    description: "Create a page in the the pages directory",
    prompts: [
      {
        name: "name",
        message: "Page name:",
        validate: function (value) {
          if (/.+/.test(value)) {
            return true;
          }
          return "name is required";
        },
      },
      {
        name: "path",
        message: "Route path:",
        filter: (input) => {
          if (input.length === 0) {
            return "/";
          }
          let formattedInput = input;
          // prepen  "/" to input if not present
          if (!/^[\/]+/.test(input)) {
            formattedInput = `/${formattedInput}`;
          }
          // append  "/" to input if not present
          if (!/[\/]+$/.test(input)) {
            formattedInput = formattedInput.concat("", "/");
          }
          return formattedInput;
        },
      },
    ],
    actions: [
      // add {Name}Page.tsx
      {
        type: "add",
        path: "src/pages{{path}}{{pascalCase name}}.tsx",
        templateFile: "templates/pages/page.txt",
      },
    ],
  });
};
