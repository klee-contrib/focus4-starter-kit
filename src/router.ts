import {startRouter, ViewStore} from "autofocus/router";
export const viewStore = new ViewStore<{page?: "home" | "test", id?: string}>(["page", "id"]);
startRouter({}, viewStore);
