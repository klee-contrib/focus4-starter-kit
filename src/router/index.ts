import {makeRouter2, Router} from "@focus4/core";

import {home} from "./home";
import {test} from "./test";
export type HomeRouter = Router<typeof home>;
export type TestRouter = Router<typeof test>;

export const router = makeRouter2({
    home,
    test
});
