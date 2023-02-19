import "focus4";
import {router} from "./router";

await router.start();
router.to(a => a("home")(1));
await import("./locale");
await import("./views");
