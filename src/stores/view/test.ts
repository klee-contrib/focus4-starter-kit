import {ViewStore} from "@focus4/core";

export const testViewStore = new ViewStore({
    beforeEnter: () => ({redirect: {lol: "salut"}}),
    prefix: "test" as "test",
    view: {lol: ""}
});
