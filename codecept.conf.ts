import {setHeadlessWhen} from "@codeceptjs/configure";
import {createServer, ViteDevServer} from "vite";

setHeadlessWhen(process.env.CI);

const port = 5174;

let server = undefined as ViteDevServer | undefined;

export const config: CodeceptJS.MainConfig = {
    tests: "./tests/tests/**/*.ts",
    output: "./tests/output",
    require: ["tsx/cjs"],
    helpers: {
        Playwright: {
            browser: "chromium",
            url: `localhost:${port}`,
            show: true,
            video: true
        },
        Focus: {
            require: "./tests/focus-helper.ts"
        }
    },
    include: {
        utilisateurs: "./tests/pages/utilisateurs.ts"
    },
    async bootstrap() {
        server = await createServer();
        await server.listen(port);
    },
    async teardown() {
        await server?.close();
    }
};

