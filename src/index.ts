import "core-js/shim";
import packageJson from "../package.json";
import {router} from "./stores";

document.title = `Focus V4 Starter Kit - ${packageJson.version}`;

router.start()
    .then(() => {
        import("./locale");
        import("./views");
    });
