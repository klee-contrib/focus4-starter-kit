import "!style-loader!css-loader!material-design-icons-iconfont/dist/material-design-icons.css";
import "core-js/shim";
import "./yolo.css";

import {router} from "./stores";

router.start().then(() => {
    import("./locale");
    import("./views");
});
