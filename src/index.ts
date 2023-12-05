import "focus4";
import {initColorScheme} from "@focus4/styling";

import {router} from "./router";

initColorScheme();

router.start().then(async () => {
    await import("./locale");
    await import("./views");
});
