import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    root: "src",
    reporters: ["default"],
    coverage: {
      all: true,
      include: ["src/**/*.ts"],
      exclude: [
        "src/tests",
        "src/types",
        "src/graphl/*.gql",
        "src/datasources/cosmos/defaults.ts",
        "**/*/types.ts",
        "**/*/operations.ts",
        "**/*/*.graphql.ts",
        "**/*/*.gql",
        "**/*/*.d.ts",
        "**/*/*.interface.ts",
        "**/*/*.test.ts",
        "**/*/__test__",
      ]
    },
  },
});
