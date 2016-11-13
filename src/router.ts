import {startRouter, ViewStore} from "autofocus/router";
export const homeView = new ViewStore({page: "" as undefined | "test" | "list", id: "" as string | undefined}, "home");
export const testView = new ViewStore({lol: ""}, "test");

export function start() {
    return startRouter({}, [homeView, testView]);
};
