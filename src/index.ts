import "focus-components/style";
import {router} from "./stores";

router.start().then(() => {
    // tslint:disable:no-require-imports
    require("./locale");
    require("./views");
});
