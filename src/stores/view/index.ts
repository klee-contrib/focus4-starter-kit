import {makeRouter} from "@focus4/core";

import {homeViewStore} from "./home";
import {testViewStore} from "./test";

const router = makeRouter([homeViewStore, testViewStore]);

export {homeViewStore, testViewStore, router};
