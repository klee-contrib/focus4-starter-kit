import {makeRouter, ViewStore} from "focus4/router";

export const homeView = new ViewStore({
    prefix: "home" as "home",
    view: {page: "" as undefined | "test" | "list", id: "" as string | undefined}
});

export const testView = new ViewStore({
    prefix: "test" as "test",
    view: {lol: ""}
});

export const router = makeRouter([homeView, testView]);
