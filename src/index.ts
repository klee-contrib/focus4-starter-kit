import "core-js/shim";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "./focus.css";

import {router} from "./stores";

router.start().then(() => {
    import("./locale");
    import("./views");
});
