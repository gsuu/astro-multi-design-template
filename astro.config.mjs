import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@common": path.resolve("./src/common"),
        "@design1": path.resolve("./src/design1"),
        "@design2": path.resolve("./src/design2"),
        "@design3": path.resolve("./src/design3"),
      },
    },
  },
});
