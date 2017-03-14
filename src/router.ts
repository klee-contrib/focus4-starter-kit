import {startRouter, ViewStore} from "focus4/router";
export const homeView = new ViewStore({page: "" as undefined | "test" | "list", id: "" as string | undefined}, "home");
export const testView = new ViewStore({lol: ""}, "test");

export function start() {
    return startRouter({}, [homeView, testView]);
};
