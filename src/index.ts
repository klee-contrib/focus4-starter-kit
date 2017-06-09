import "focus-components/style";
import {router} from "./router";

router.start().then(() => {
    // tslint:disable:no-require-imports
    require("./translation");
    require("./views");
});
