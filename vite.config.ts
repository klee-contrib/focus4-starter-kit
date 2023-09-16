import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";
import checker from "vite-plugin-checker";
import mockDevServerPlugin from "vite-plugin-mock-dev-server";
import topLevelAwait from "vite-plugin-top-level-await";

import {baseConfig, cssAutoModules} from "@focus4/tooling";

export default defineConfig({
    ...baseConfig,
    base: "",
    plugins: [cssAutoModules(/^\/src/), topLevelAwait(), react(), checker({typescript: true}), mockDevServerPlugin()],
    server: {
        proxy: {
            "/api": {target: "api-url.com"}
        }
    }
});
