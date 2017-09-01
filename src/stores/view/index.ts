import {makeRouter} from "focus4/router";

import {homeViewStore} from "./home";
import {testViewStore} from "./test";

const router = makeRouter([homeViewStore, testViewStore]);

export {homeViewStore, testViewStore, router};
