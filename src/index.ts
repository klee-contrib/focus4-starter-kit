import "core-js/shim";
import {router} from "./stores";

router.start().then(() => {
    import("./locale");
    import("./views");
});
