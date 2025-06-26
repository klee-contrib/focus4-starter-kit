import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";
import checker from "vite-plugin-checker";
import {mockDevServerPlugin} from "vite-plugin-mock-dev-server";
import oxlintPlugin from "vite-plugin-oxlint";

import {baseConfig, cssAutoModules} from "@focus4/tooling";

export default defineConfig({
    ...baseConfig,
    base: "",
    plugins: [cssAutoModules(/__style__/), react(), checker({typescript: true}), oxlintPlugin(), mockDevServerPlugin()],
    server: {
        host: "0.0.0.0",
        proxy: {
            "/api": {target: "api-url.com"}
        }
    },
    preview: {
        allowedHosts: ["focus4-starter-kit.fly.dev"]
    }
});
