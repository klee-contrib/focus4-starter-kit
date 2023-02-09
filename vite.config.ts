import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";
import checker from "vite-plugin-checker";
import topLevelAwait from "vite-plugin-top-level-await";

import {baseConfig, cssAutoModules} from "@focus4/tooling";

export default defineConfig({
    ...baseConfig,
    base: "",
    plugins: [
        cssAutoModules(/^\/src/),
        topLevelAwait(),
        react({babel: {parserOpts: {plugins: ["decorators-legacy"]}}}),
        checker({typescript: true})
    ]
});
