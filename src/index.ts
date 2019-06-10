import "focus4";
import {router} from "./stores";

router.start().then(() => {
    import("./locale");
    import("./views");
});
