import {ViewStore} from "focus4/router";

export const testViewStore = new ViewStore({
    beforeEnter: () => ({redirect: {lol: "salut"}}),
    prefix: "test" as "test",
    view: {lol: ""}
});
