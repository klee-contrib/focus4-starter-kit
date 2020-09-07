import "focus4";
import {router} from "./router";

router.start().then(() => {
    router.to(a => a("home")(1));
    import("./locale");
    import("./views");
});
