import {makeRouter, Router} from "@focus4/core";

import {home} from "./home";
import {test} from "./test";
export type HomeRouter = Router<typeof home>;
export type TestRouter = Router<typeof test>;

export const router = makeRouter({
    home,
    test
});
