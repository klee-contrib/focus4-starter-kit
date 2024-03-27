import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";
import checker from "vite-plugin-checker";
import mockDevServerPlugin from "vite-plugin-mock-dev-server";

import {baseConfig, cssAutoModules} from "@focus4/tooling";

export default defineConfig({
    ...baseConfig,
    base: "",
    plugins: [cssAutoModules(/^\/src\/(.+)\//), react(), checker({typescript: true}), mockDevServerPlugin()],
    server: {
        host: "0.0.0.0",
        proxy: {
            "/api": {target: "api-url.com"}
        }
    }
});
