import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  documents: "./src/**/*.tsx",
  schema: [
    {
      "<SCHEMA_URL>": {
        headers: {
          apiKey: "<API_KEY>",
        },
      },
    },
  ],
  ignoreNoDocuments: true,
  generates: {
    "./src/graphql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
