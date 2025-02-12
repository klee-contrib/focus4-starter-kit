import {initColorScheme} from "@focus4/core";

import {router} from "./router";

initColorScheme();

router.start().then(async () => {
    await import("./locale");
    await import("./views");
});
