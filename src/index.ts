import "focus4";
import {initColorScheme} from "@focus4/styling";

import {router} from "./router";

initColorScheme();

await router.start();

await import("./locale");
await import("./views");
