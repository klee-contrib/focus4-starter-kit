import "focus4";
import {router} from "./router";

await router.start();

await import("./locale");
await import("./views");
